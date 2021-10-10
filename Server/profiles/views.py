import jwt
import requests
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
from rest_framework_jwt.settings import api_settings

from apis.settings import SECRET_KEY

from members.models import Member


@method_decorator(csrf_exempt, name='dispatch')
@api_view(['GET'])
def status_check(request):
    """
    유저 정보 요청에 응답하는 함수
    """
    access_token = request.COOKIES["getit"]
    payload = jwt.decode(access_token, SECRET_KEY, 'HS256')
    user_id = payload['user_id']
    profile = Profile.objects.get(id=user_id)
    context = {
        'user_pk': profile.id,
        'nickname': profile.nickname,
        'access_token': access_token
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
                {
                    "user":1,
                    "user_pk":1,
                    "nickname":"edcedcd1027",
                    "job":"개발자",
                    "level":"코린이",
                    "image": null,
                    "email":"edcedc1027@gmail.com",
                    "info":"저는 이형준입니다. 백엔드 개발자가 될껍니다.",
                    "git":"leeceo97",
                    "stack":[
                        "django",
                        "drf",
                        "mysql"
                    ]
                }
        """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request, user_pk):
        """
            개인 프로필 detail(POST)

            ---
                {
                    "user": 2,
                    "user_pk": 2,
                    "nickname": "edcedc1027",
                    "job": "개발자",
                    "level": "코린이",
                    "email": "edcedc1027@gmail.com",
                    "info": "저는 이형준입니다. 백엔드 개발자가 될껍니다.",
                    "git": "leeceo97",
                    "stack": ["django","drf","mysql","postgre","docker","k8s","aws","gcp","nginx"]
                    --> image의경우 일단은 값은 넣지 말아주세요!
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
                {
                    "user": 2,
                    "user_pk": 2,
                    "nickname": "edcedc1027",
                    "job": "개발자",
                    "level": "코린이",
                    "email": "edcedc1027@gmail.com",
                    "info": "저는 이형준입니다. 백엔드 개발자가 될껍니다.",
                    "git": "leeceo97",
                    "stack": ["django","drf","mysql","postgre","docker","k8s","aws","gcp","nginx"]
                    --> image의경우 일단은 값은 넣지 말아주세요!
                }
        """
        print(request.data.get('user'))
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            print('serializer')
            serializer.save()
            print('save complete')
            names = request.data['stack']
            profile.stack.clear()
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)

                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TeamProfileCreate(GenericAPIView):

    serializer_class = TeamProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, user_pk):
        return get_object_or_404(TeamProfile, user_id=user_pk)

    def get(self, request, user_pk):
        """
        팀 프로필 list (GET)
        
        ---
                        [
            {
                "id": 26,
                "user": 4,
                "title": "장고",
                "content": "ㅁㄴㅇㅁㄴㅇ",
                "status": true,
                "image": null,
                "stack": [
                    "drf",
                    "mysql"
                ],
                "created_at": "2021-10-11T03:27:07.396394+09:00",
                "members": [
                    "4"
                ]
            }]
        """
        profiles = TeamProfile.objects.filter(user=user_pk)
        serializer = TeamProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, user_pk):
        """
        팀 프로필 list(POST)

        ---
                {
                    "user":4,
                    "title":"장고22",
                    "content":"테스트입니다.",
                    "status":true,
                    --> status는 프로젝트의 활성여부입니다. true -> 완료, false -> 진행중
                    "image":null,
                    "stack":["drf","mysql"]
                }
        """

        serializer = TeamProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            profile = TeamProfile.objects.get(id=serializer.data['id'])
            members = request.data['user']
            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)

                profile.stack.add(_name)
            _member, _ = Member.objects.get_or_create(member=members)
            profile.members.add(_member)
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
                        "id": 26,
                        "user": 4,
                        "title": "장고",
                        "content": "ㅁㄴㅇㅁㄴㅇ",
                        "status": true,
                        "image": null,
                        "stack": [
                            "drf",
                            "mysql"
                        ],
                        "created_at": "2021-10-11T03:27:07.396394+09:00",
                        "members": [
                            "4"
                        ]
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
                    "user":4,
                    "title":"장고22",
                    "content":"테스트입니다.",
                    "status":true,
                    --> status는 프로젝트의 활성여부입니다. true -> 완료, false -> 진행중
                    "image":null,
                    "stack":["drf","mysql"]
                    "member":["2","3"]
                }
        """
        profile = self.get_object(user_id, id)
        serializer = TeamProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            profile.stack.clear()
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)

                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id, user_id):
        """
            팀프로필 detail (DELETE)

            ---
        """
        profile = self.get_object(user_id, id)
        self.check_object_permissions(self.request, profile)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)