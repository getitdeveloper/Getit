from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from .permissions import IsOwnerOrReadOnly
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser

from profiles.models import Profile
from profiles.serializers import ProfileSerializer
from tags.models import Tag


class ProfileDetail(GenericAPIView):

    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    # parser_classes = (MultiPartParser,)

    def get_object(self, user_pk):
        return get_object_or_404(Profile, user_pk=user_pk)

    def get(self, request, user_pk):
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile)

        return Response(serializer.data)
    
    def post(self, request, user_pk):
        """
        개인 프로필
        ---
        # POST 예시
            {
                "user": 1,
                "user_pk": 1,
                "nickname": "test",
                "job": "개발자",
                "developer_level": "코린이",
                "designer_and_pm_level": "하수",
                "image": "C:\\User\\Test\\Image.jpg"
                "email": "test@test.com",
                "info": "안녕하세요. test입니다.",
                "git": "https://github.com/test",
                "stacks": [
                    1,
                    2,
                ],
                "portfolio": "string"
            }
        """
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile, data=request.data)
        self.check_object_permissions(self.request, profile)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)