from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, status
from rest_framework.decorators import api_view

from portfolios.models import Portfolio
from .permissions import IsOwnerOrReadOnly
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser

from profiles.models import Profile, TeamProfile
from profiles.serializers import ProfileSerializer, TeamProfileSerializer
from tags.models import Tag

@api_view(['GET'])
def status_check(request):
    """
    유저 정보 요청에 응답하는 함수
    """
    user_id = request.user.id
    print(user_id)
    profile = Profile.objects.get(id=user_id)
    context = {
        'user_pk': profile.id,
        'nickname': profile.nickname
    }
    return JsonResponse(context)

@method_decorator(csrf_exempt, name='dispatch')
class ProfileDetail(GenericAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    # parser_classes = (MultiPartParser,)
    def get_object(self, user_pk):
        return get_object_or_404(Profile, user_pk=user_pk)

    def get(self, request, user_pk):
        """
                개인 프로필 detail(GET)

                ---
                # GET Response 예시
                    {
                    "user":1,
                    "user_pk":1,
                    "nickname":"edcedcd1027",
                    "job":"개발자",
                    "level":"코린이",
                    "image":null,
                    "email":"edcedc1027@gmail.com",
                    "info":"저는 이형준입니다. 백엔드 개발자가 될껍니다.",
                    "git":"leeceo97",
                    "stack":["django","drf","mysql","postgre","docker","k8s","aws","gcp","nginx"]
                    }
                """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request, user_pk):
        """
                개인 프로필 detail(POST)

                ---
                # POST Request 예시
                    {
                        "user": 2,
                        "user_pk": 2,
                        "nickname": "edcedc1027",
                        "job": "개발자",
                        "image": "/media/profile/Untitled.jpeg",
                        "level": "코린이",
                        "email": "edcedc1027@gmail.com",
                        "info": "저는 이형준입니다. 백엔드 개발자가 될껍니다.",
                        "git": "leeceo97",
                        "stack": ["django","drf","mysql","postgre","docker","k8s","aws","gcp","nginx"]
                        --> stack의경우 삭제기능은 put만 구현해놨습니다.
                    }
        """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, user_pk):
        """
                개인 프로필 detail(PUT)

                ---
                # PUT Request 예시
                    {
                        "user": 2,
                        "user_pk": 2,
                        "nickname": "edcedc1027",
                        "job": "개발자",
                        "image": "/media/profile/Untitled.jpeg",
                        "level": "코린이",
                        "email": "edcedc1027@gmail.com",
                        "info": "저는 이형준입니다. 백엔드 개발자가 될껍니다.",
                        "git": "leeceo97",
                        "stack": ["django","drf","mysql","postgre","docker","k8s","aws","gcp","nginx"]
                        --> stack의경우 삭제기능은 put만 구현해놨습니다.
                    }
        """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                profile.stack.clear()
                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TeamProfileCreate(GenericAPIView):
    """
                팀 프로필 list(GET)

                ---
                # GET Response 예시
                    {
                    "id":1,
                    "user":2,
                    "name":"장고스터디",
                    "content":"ㅁㄴㅇㅁㄴㅇ",
                    "status":true,
                    "member":[2],
                    "image":null,
                    "stack":["drf","mysql","docker"],
                    "created_at":"2021-09-12T07:07:04.808820+09:00"
                    }
                """
    serializer_class = TeamProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, user_pk):
        return get_object_or_404(TeamProfile, user_id=user_pk)

    def get(self, request, user_pk):
        profiles = TeamProfile.objects.filter(user=user_pk)
        serializer = TeamProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, user_pk):
        """
        팀 프로필 list(POST)

        ---
        # POST request 예시
                {
                "user":2,
                "name":"장고",
                "content":"ㅁㄴㅇㅁㄴㅇ",
                "status":true,
                "member":[2],
                "image":null,
                "stack":["drf","mysql","docker"]
                }
        """

        serializer = TeamProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            profile = self.get_object(user_pk)
            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class TeamProfileDetail(GenericAPIView):
    serializer_class = TeamProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, user_id, id):
        return get_object_or_404(TeamProfile, user_id=user_id, id=id)

    def get(self, request, user_id, id):
        """
                팀 프로필 detail(GET)

                ---
                # GET Response 예시
                    {
                    "id":1,
                    "user":2,
                    "name":"장고스터디",
                    "content":"ㅁㄴㅇㅁㄴㅇ",
                    "status":true,
                    "member":[2],
                    "image":null,
                    "stack":["drf","mysql","docker"],
                    "created_at":"2021-09-12T07:07:04.808820+09:00"
                    }
                """
        profile = self.get_object(user_id, id)
        serializer = TeamProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, user_id, id):
        """
        팀 프로필 detail(PUT)

        ---
        # PUT request 예시
                {
                "user":2,
                "name":"장고스터디",
                "content":"ㅁㄴㅇㅁㄴㅇ",
                "status":true,
                "member":[2],
                "image":null,
                "stack":["drf","mysql","docker"]
                }
        """
        profile = self.get_object(user_id, id)
        serializer = TeamProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                profile.stack.clear()
                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)