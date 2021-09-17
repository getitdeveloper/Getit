from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import get_object_or_404, GenericAPIView
from rest_framework.parsers import MultiPartParser
from .models import CommonComment, RecruitComment
from .serializers import CommonCommentSerializer, RecruitCommentSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsOwnerOrReadOnly

# Create your views here.
from profiles.models import Profile


class CommonCommentListAPIView(GenericAPIView):

    serializer_class = CommonCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, board_id):
        """
            댓글 list (GET)

            ---
                [
                    {
                        "id": 3,
                        "user": {
                            "id": 3,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "commonpost": 3,
                        "recruitmentpost": null,
                        "content": "test",
                        "create_at": "2021-09-16T21:27:44.476554+09:00"
                    },
                    {
                        "id": 4,
                        "user": {
                            "id": 2,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "commonpost": 3,
                        "recruitmentpost": null,
                        "content": "test",
                        "create_at": "2021-09-16T21:27:31.825620+09:00"
                    }
                ]
        """
        posts = CommonComment.objects.filter(commonpost=board_id)
        serializer = CommonCommentSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, board_id):
        """
            댓글 list (POST)

            ---
                {
                    "user": 3,
                    "commonpost": 3,
                    "recruitmentpost": null,
                    "content": "test",
                }
        """
        serializer = CommonCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommonCommentDetailAPIView(GenericAPIView):
    serializer_class = RecruitCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk, board_id):
        return get_object_or_404(CommonComment, pk=pk, commonpost=board_id)

    def get(self, request, pk, board_id):
        """
            댓글 detail (GET)

            ---
                {
                    "id": 3,
                    "user": {
                        "id": 2,
                        "profile": {
                            "nickname": null,
                            "image": "/media/profile/Untitled.jpeg"
                        }
                    },
                    "commonpost": 3,
                    "recruitmentpost": null,
                    "content": "test",
                    "create_at": "2021-09-16T21:27:31.825620+09:00"
                }
        """
        post = self.get_object(pk, board_id)
        serializer = CommonCommentSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk, board_id):
        """
            댓글 detail (PUT:수정)

            ---
                {
                    "user":2,
                    "commonpost":1,
                    "recruitmentpost":null,
                    "content":"test",
                }
        """
        post = self.get_object(pk, board_id)
        self.check_object_permissions(self.request, post)
        serializer = CommonCommentSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, board_id):
        """
            댓글 detail (DELETE)

            ---

        """
        post = self.get_object(pk, board_id)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CommonCommentMyListAPIView(GenericAPIView):
    serializer_class = CommonCommentSerializer

    def get(self, request, pk):
        """
            my댓글 list (GET)

            ---
                [
                    {
                        "user":1,
                        "commonpost":2,
                        "recruitmentpost":null,
                        "content":"asdasvasva",
                        "create_at":"2021-09-12T10:23:39.469226+09:00"},
                    {
                        "user":1,
                        "commonpost":2,
                        "recruitmentpost":null,
                        "content":"asvasvasvasv",
                        "create_at":"2021-09-12T10:23:44.361077+09:00"
                    }
                ]
        """
        comments = CommonComment.objects.filter(user=pk)
        serializer = CommonCommentSerializer(comments, many=True)
        return Response(serializer.data)

class RecruitCommentListAPIView(GenericAPIView):

    serializer_class = RecruitCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, board_id):
        """
            댓글 list (GET)

            ---
                [
                    {
                        "id": 3,
                        "user": {
                            "id": 3,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "commonpost": 3,
                        "recruitmentpost": null,
                        "content": "test",
                        "create_at": "2021-09-16T21:27:44.476554+09:00"
                    },
                    {
                        "id": 4,
                        "user": {
                            "id": 2,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "commonpost": 3,
                        "recruitmentpost": null,
                        "content": "test",
                        "create_at": "2021-09-16T21:27:31.825620+09:00"
                    }
                ]
        """
        posts = RecruitComment.objects.filter(recruitpost=board_id)
        serializer = RecruitCommentSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, board_id):
        """
            댓글 list (POST)

            ---
                {
                    "user": 3,
                    "commonpost": 3,
                    "recruitmentpost": null,
                    "content": "test",
                }
        """
        serializer = RecruitCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecruitCommentDetailAPIView(GenericAPIView):
    serializer_class = RecruitCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk, board_id):
        return get_object_or_404(RecruitComment, pk=pk, recruitpost=board_id)

    def get(self, request, pk, board_id):
        """
            댓글 detail (GET)

            ---
                {
                    "id": 3,
                    "user": {
                        "id": 2,
                        "profile": {
                            "nickname": null,
                            "image": "/media/profile/Untitled.jpeg"
                        }
                    },
                    "commonpost": 3,
                    "recruitmentpost": null,
                    "content": "test",
                    "create_at": "2021-09-16T21:27:31.825620+09:00"
                }
        """
        post = self.get_object(pk, board_id)
        serializer = RecruitCommentSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk, board_id):
        """
            댓글 detail (PUT:수정)

            ---
                {
                    "user":2,
                    "commonpost":1,
                    "recruitmentpost":null,
                    "content":"test",
                }
        """
        post = self.get_object(pk, board_id)
        self.check_object_permissions(self.request, post)
        serializer = RecruitCommentSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, board_id):
        """
            댓글 detail (DELETE)

            ---

        """
        post = self.get_object(pk, board_id)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RecruitCommentMyListAPIView(GenericAPIView):
    serializer_class = RecruitCommentSerializer

    def get(self, request, pk):
        """
            my댓글 list (GET)

            ---
                [
                {
                "user":1,
                "commonpost":2,
                "recruitmentpost":null,
                "content":"asdasvasva",
                "create_at":"2021-09-12T10:23:39.469226+09:00"},
                {
                "user":1,
                "commonpost":2,
                "recruitmentpost":null,
                "content":"asvasvasvasv",
                "create_at":"2021-09-12T10:23:44.361077+09:00"
                }
                ]
        """
        comments = RecruitComment.objects.filter(user=pk)
        serializer = RecruitCommentSerializer(comments, many=True)
        return Response(serializer.data)