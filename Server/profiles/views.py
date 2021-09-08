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
    서버의 상태를 확인하는 함수
    """
    return Response({
        "status": "OK"
    }, status=status.HTTP_200_OK)

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
                        "user": 1,
                        "user_pk": 1,
                        "nickname": "test",
                        "job": "개발자",
                        "level": "코린이",
                        "image": "C:\\User\\Test\\Image.jpg"
                        "email": "test@test.com",
                        "info": "안녕하세요. test입니다.",
                        "git": "https://github.com/test",
                """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request, user_pk):
        """
        개인 프로필 detail(POST)

        ---
        # POST request 예시
            {
                "user": 3,
                "user_pk": 3,
                "nickname": "테스트계정",
                "job": "개발자",
                "level": "코린이",
                "image": "image.test.com",
                "email": "test@naer.com",
                "info": "asdasd",
                "git": "asdasdasd",
                "stack": ["abc","def"]
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
        # POST request 예시
            {
                "user": 3,
                "user_pk": 3,
                "nickname": "테스트계정",
                "job": "개발자",
                "level": "코린이",
                "image": "image.test.com",
                "email": "test@naer.com",
                "info": "asdasd",
                "git": "asdasdasd",
                "stack": ["abc","def"]
            }
        """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            print(names)
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                profile.stack.clear()
                print(profile.stack)
                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TeamProfileCreate(GenericAPIView):
    serializer_class = TeamProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, user_id):
        return get_object_or_404(TeamProfile, user_id=user_id)

    def get(self, request, user_id):
        profiles = TeamProfile.objects.filter(user=user_id)
        serializer = TeamProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, user_id):
        """
        개인 프로필 detail(POST)
        ---
        # POST request 예시
            {
                "user": 1,
                "user_pk": 1,
                "nickname": "test",
                "job": "개발자",
                "level": "코린이",
                "image": "C:\\User\\Test\\Image.jpg"
                "email": "test@test.com",
                "info": "안녕하세요. test입니다.",
                "git": "https://github.com/test",
        """
        serializer = TeamProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # names = request.data['stack']
            # for name in names:
            #     if not name:
            #         continue
            #     _name, _ = Tag.objects.get_or_create(name=name)
            #     profile.stack.add(_name)
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
                개인 프로필 detail(GET)
                ---
                # GET Response 예시
                    {
                        "user": 1,
                        "user_pk": 1,
                        "nickname": "test",
                        "job": "개발자",
                        "level": "코린이",
                        "image": "C:\\User\\Test\\Image.jpg"
                        "email": "test@test.com",
                        "info": "안녕하세요. test입니다.",
                        "git": "https://github.com/test",
                """
        profile = self.get_object(user_id, id)
        serializer = TeamProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, user_id, id):
        """
        개인 프로필 detail(POST)
        ---
        # POST request 예시
            {
                "user": 1,
                "user_pk": 1,
                "nickname": "test",
                "job": "개발자",
                "level": "코린이",
                "image": "C:\\User\\Test\\Image.jpg"
                "email": "test@test.com",
                "info": "안녕하세요. test입니다.",
                "git": "https://github.com/test",
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
                profile.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)