from boards.serializers import RecruitmentBoardSerializer
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.parsers import FormParser
from django.http.response import JsonResponse

from boards.models import CommonBoard, RecruitmentBoard
from likes.pagenation import LikePageNumberPagination
from .permissions import IsOwnerOrReadOnly, LikePostIsOwnerOnly
from rest_framework import serializers, status
from .serializers import CommonBoardLikeSerializer, CommonBoardLikePostSerializer, RecruitBoardLikePostSerializer, \
    RecruitBoardLikeSerializer
from .models import CommonBoardLike, RecruitBoardLike
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, get_object_or_404

counts_field = openapi.Schema(
    'response',
    type=openapi.TYPE_INTEGER,
)

resp = openapi.Schema(
    'response',
    type=openapi.TYPE_OBJECT,
    properties={
        'counts': counts_field,
    }
)

# Create your views here.
class CommonBoardLikeAPIView(GenericAPIView):
    serializer_class = CommonBoardLikeSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        post = CommonBoard.objects.get(id=self.kwargs['board_id'])
        return CommonBoardLike.objects.filter(user=user, commonpost=post)

    def get(self, request, board_id):
        """
            좋아요 (GET)

            ---
                [
                    {
                        "commonpost": 2,
                        "user": 2
                    },
                    {
                        "commonpost": 2,
                        "user": 3
                    }
                ]
        """
        likes = CommonBoardLike.objects.filter(commonpost_id=board_id)
        serializer = CommonBoardLikeSerializer(likes, many=True,context={'request': request})
        return Response(serializer.data)

    def post(self, request, board_id):
        """
            좋아요 (POST)

            ---
                [request]
                {
                    "user": 1
                }

                [response]
                <좋아요 취소>
                {
                    'status':'remove'
                }
                <좋아요 추가>
                {
                    'status':'add'
                }
        """
        if self.get_queryset().exists():
            self.get_queryset().delete()
            return JsonResponse({'status': 'remove'})
        CommonBoardLike.objects.create(commonpost_id=board_id, user_id=request.user.id)
        return JsonResponse({'status': 'add'})


class CommonBoardLikePostAPIView(GenericAPIView):
    serializer_class = CommonBoardLikePostSerializer
    pagination_class = LikePageNumberPagination
    permission_classes = [LikePostIsOwnerOnly]
    
    def get(self, request, user_id):
        """
            질문/자유 게시판 좋아요한 글 (GET)

            ---
                [
                    {
                        "commonpost": {
                            "id": 2,
                            "title": "test2",
                            "category": "question",
                            "worker": "개발자",
                            "content": "test2",
                            "image": null,
                            "create_at": "2021-09-16T19:24:25.437868+09:00",
                            "user": {
                                "id": 3,
                                "profile": {
                                    "nickname": null,
                                    "image": "/media/profile/Untitled.jpeg"
                                }
                            },
                            "likes": 2,
                            "comments": 0
                        }
                    },
                    {
                        "commonpost": {
                            "id": 6,
                            "title": "asdasdasd3",
                            "category": "question",
                            "worker": "개발자",
                            "content": "asdasdasdasd",
                            "image": null,
                            "create_at": "2021-09-16T19:44:37.538559+09:00",
                            "user": {
                                "id": 3,
                                "profile": {
                                    "nickname": null,
                                    "image": "/media/profile/Untitled.jpeg"
                                }
                            },
                            "likes": 1,
                            "comments": 0
                        }
                    }
                ]
        """
        posts = CommonBoardLike.objects.filter(user=user_id)
        paginator = LikePageNumberPagination()
        result_page = paginator.paginate_queryset(posts, request)
        serializer = CommonBoardLikePostSerializer(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)


class RecruitmentBoardLikeAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        post = RecruitmentBoard.objects.get(id=self.kwargs['board_id'])
        return RecruitBoardLike.objects.filter(user=user, recruitpost=post)

    def get(self, request, board_id):
        """
            모집 게시판 좋아요 (GET)

            ---
                [
                    {
                        "recruitpost": 7,
                        "user": 2
                    },
                    {
                        "recruitpost": 7,
                        "user": 3
                    }
                ]
        """
        likes = RecruitBoardLike.objects.filter(recruitpost_id=board_id)
        serializer = RecruitBoardLikeSerializer(likes, many=True,context={'request': request})
        return Response(serializer.data)

    def post(self, request, board_id):
        """
            모집 게시판 좋아요 (POST)

            ---
                [request]
                {
                    "user": 1
                }

                [response]
                <좋아요 취소>
                {
                    'status':'remove'
                }
                <좋아요 추가>
                {
                    'status':'add'
                }
        """
        if self.get_queryset().exists():
            self.get_queryset().delete()
            return JsonResponse({'status': 'remove'})
        RecruitBoardLike.objects.create(recruitpost_id=board_id, user_id=request.user.id)
        return JsonResponse({'status': 'add'})


class RecruitmentBoardLikePostAPIView(GenericAPIView):
    serializer_class = RecruitBoardLikePostSerializer
    permission_classes = [LikePostIsOwnerOnly]

    def get(self, request, user_id):
        """
            모집 게시판 좋아요한 글 (GET)

            ---
                [
                    {
                        "recruitpost": {
                            "id": 7,
                            "user": {
                                "id": 3,
                                "profile": {
                                    "nickname": null,
                                    "image": "/media/profile/Untitled.jpeg"
                                }
                            },
                            "title": "test",
                            "study": {
                                "id": 2,
                                "user": 3,
                                "name": "test2",
                                "content": "test2",
                                "status": true,
                                "member": [],
                                "image": null,
                                "stack": [
                                    "test"
                                ],
                                "created_at": "2021-09-16T19:25:01.468193+09:00"
                            },
                            "developer": 3,
                            "designer": 0,
                            "pm": 2,
                            "content": "test",
                            "start_date": "2021-09-16",
                            "end_date": "2021-09-18",
                            "status": true,
                            "create_at": "2021-09-16T21:26:25.586511+09:00",
                            "comments": 0,
                            "likes": 2
                        }
                    },
                    {
                        "recruitpost": {
                            "id": 6,
                            "user": {
                                "id": 3,
                                "profile": {
                                    "nickname": null,
                                    "image": "/media/profile/Untitled.jpeg"
                                }
                            },
                            "title": "test",
                            "study": {
                                "id": 2,
                                "user": 3,
                                "name": "test2",
                                "content": "test2",
                                "status": true,
                                "member": [],
                                "image": null,
                                "stack": [
                                    "test"
                                ],
                                "created_at": "2021-09-16T19:25:01.468193+09:00"
                            },
                            "developer": 2,
                            "designer": 0,
                            "pm": 0,
                            "content": "test",
                            "start_date": "2021-09-16",
                            "end_date": "2021-09-17",
                            "status": true,
                            "create_at": "2021-09-16T21:10:39.237667+09:00",
                            "comments": 0,
                            "likes": 1
                        }
                    }
                ]
        """
        posts = RecruitBoardLike.objects.filter(user=user_id)
        paginator = LikePageNumberPagination()
        result_page = paginator.paginate_queryset(posts, request)
        serializer = RecruitBoardLikePostSerializer(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)