import json

import requests
from django.db.models.query_utils import Q
from django.http.response import JsonResponse
from django.utils.translation import get_supported_language_variant

from drf_yasg import openapi
from rest_framework.filters import SearchFilter
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.parsers import MultiPartParser

from likes.models import CommonBoardLike
from tags.models import Tag
from .permissions import IsOwnerOrReadOnly, RecruitmentIsOwnerOrReadOnly
from .serializers import RecruitmentBoardSerializer, CommonBoardSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CommonBoard, RecruitmentBoard
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from .pagenation import BoardPageNumberPagination, WholeBoardCommonPageNumberPagination, WholeBoardRecruitmentPageNumberPagination
from rest_framework import viewsets


class CommonBoardListAPIView(GenericAPIView):
    queryset = CommonBoard.objects.all()
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommonBoardSerializer
    pagination_class = BoardPageNumberPagination
    ordering_fields = ['create_at']
    filter_backends = [SearchFilter]
    search_fields = ['title', 'content','worker',]

    def get(self, request):
        """
            질문/자유 게시글 list (GET)

            ---
                127.0.0.1:8000/api/board?category=free(question)
                {
                "count":1,
                "next":null,
                "previous":null,
                    "results":
                    [
                    {
                    "id":1,
                    "title":"liketest",
                    "category":"free",
                    "worker":"개발자",
                    "content":"testtesttest",
                    "image":null,
                    "create_at":"2021-09-15T20:09:02.707765+09:00",
                        "user":{
                            "id":2,
                            "profile":
                                {
                                "nickname":"edcedc1027",
                                "image":null
                                }},
                                    "likes":2,
                                    "comments":0
                                    }
                                    ]}
        """
        category = request.GET.get('category')
        queryset = self.get_queryset()
        if category == 'free':
            posts = CommonBoard.objects.filter(category=category)
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        elif category == 'question':
            posts = CommonBoard.objects.filter(category=category)
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            posts = CommonBoard.objects.all()
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        """
            질문/자유 게시글 list (POST)

            ---
                {
                    "title":"asdasdasd",
                    "category":"question",
                    "content":"asdasdasdasd",
                    "image":null,
                    "user":3,
                    "stack":["python", "java"],
                    "worker":"개발자"
                }
        """
        serializer = CommonBoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommonBoardDetailAPIView(GenericAPIView):

    serializer_class = CommonBoardSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk):
        return get_object_or_404(CommonBoard, pk=pk)

    def get(self, request, pk, format=None):
        """
            질문/자유 게시글 detail (GET)

            ---
                {
                    "id": 1,
                    "title": "test",
                    "category": "free",
                    "content": "test",
                    "image": null,
                    "create_at": "2021-09-12T10:53:19.475337+09:00",
                    "user": 1,
                    "stack": [
                        "python"
                    ],
                    "likes": 1,
                    "comments": 1
                }
        """
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        """
            질문/자유 게시글 detail (PUT)

            ---
                {
                    "title":"asdasdasd",
                    "category":"question",
                    "content":"asdasdasdasd",
                    "image":null,
                    "user":3,
                    "stack":["python", "java"]
                }
        """
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post, data=request.data)
        self.check_object_permissions(self.request, post)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """
            질문/자유 게시글 detail (DELETE)

            ---
        """
        post = self.get_object(pk)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class RecruitmentBoardPostListAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer
    permission_classes = [RecruitmentIsOwnerOrReadOnly]
    pagination_class = BoardPageNumberPagination
    ordering_fields = ['create_at']
    filter_backends = [SearchFilter]
    search_fields = ['content','worker','title',]

    # parser_classes = (MultiPartParser,)

    def get(self, request):
        """
            모집 게시글 list (GET)

            ---
                {
                    "count": 2,
                    "next": null,
                    "previous": null,
                    "results": [
                        {
                            "id": 1,
                            "user": 2,
                            "study": {
                                "id": 1,
                                "user": 2,
                                "name": "test",
                                "content": "test",
                                "status": true,
                                "member": [
                                    2
                                ],
                                "image": null,
                                "stack": [
                                    "python"
                                ],
                                "created_at": "2021-09-12T11:06:40.929959+09:00"
                            },
                            "developer": 1,
                            "designer": 0,
                            "pm": 0,
                            "content": "test",
                            "start_date": "2021-09-12",
                            "end_date": "2021-09-13",
                            "status": true
                        },
                        {
                            "id": 2,
                            "user": 2,
                            "study": {
                                "id": 1,
                                "user": 2,
                                "name": "test",
                                "content": "test",
                                "status": true,
                                "member": [
                                    2
                                ],
                                "image": null,
                                "stack": [
                                    "python"
                                ],
                                "created_at": "2021-09-12T11:06:40.929959+09:00"
                            },
                            "developer": 2,
                            "designer": 0,
                            "pm": 0,
                            "content": "test2",
                            "start_date": "2021-09-12",
                            "end_date": "2021-09-13",
                            "status": true
                        }
                    ]
                }
        """
        posts = RecruitmentBoard.objects.all()
        posts = self.filter_queryset(posts)
        paginator = BoardPageNumberPagination()
        result_page = paginator.paginate_queryset(posts, request)
        serializer = RecruitmentBoardSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        """
            모집 게시글 list (POST)

            ---
                {
                    "user": 2,
                    "study": 1,
                    "developer": 2,
                    "designer": 0,
                    "pm": 0,
                    "content": "test2",
                    "start_date": "2021-09-12",
                    "end_date": "2021-09-13",
                    "status": true
                }
        """
        serializer = RecruitmentBoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RecruitmentBoardPostDetailAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk):
        return get_object_or_404(RecruitmentBoard, pk=pk)

    def get(self, request, pk, format=None):
        """
            모집 게시글 detail (GET)

            ---
                {
                    "id": 1,
                    "user": 2,
                    "study": {
                        "id": 1,
                        "user": 2,
                        "name": "test",
                        "content": "test",
                        "status": true,
                        "member": [
                            2
                        ],
                        "image": null,
                        "stack": [
                            "python"
                        ],
                        "created_at": "2021-09-12T11:06:40.929959+09:00"
                    },
                    "developer": 1,
                    "designer": 0,
                    "pm": 0,
                    "content": "test",
                    "start_date": "2021-09-12",
                    "end_date": "2021-09-13",
                    "status": true
                }
        """
        post = self.get_object(pk)
        serializer = RecruitmentBoardSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        """
        모집 게시글 detail (PUT)

        ---
            {
                "id": 1,
                "user": 2,
                "study": 1,
                "developer": 2,
                "designer": 0,
                "pm": 0,
                "content": "test",
                "start_date": "2021-09-12",
                "end_date": "2021-09-13",
                "status": true,
                "stack": ["python", "react"]
            }
        """
        post = self.get_object(pk)
        serializer = RecruitmentBoardSerializer(post, data=request.data)
        self.check_object_permissions(self.request, post)
        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                post.stack.clear()
                post.stack.add(_name)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """
                모집 게시글 detail (DELETE)

                ---
        """
        post = self.get_object(pk)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class WholePostSearch(GenericAPIView):

    filter_backends = [SearchFilter]
    search_fields = ['content', 'title',]

    def get(self, request):
        """
            전체 게시글 list (GET)

            ---
                127.0.0.1:8000/api/board?category=free(question)
                {
                    "freeboard": [
                    {
                        "id": 13,
                        "title": "test2",
                        "category": "free",
                        "worker": "개발자",
                        "content": "test1",
                        "image": null,
                        "create_at": "2021-09-12T16:44:50.233830+09:00",
                        "user": {
                            "id": 2,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "likes": 0,
                        "comments": 0
                    },
                    {
                        "id": 12,
                        "title": "test2",
                        "category": "free",
                        "worker": "개발자",
                        "content": "test1",
                        "image": null,
                        "create_at": "2021-09-12T16:44:49.672820+09:00",
                        "user": {
                            "id": 2,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "likes": 0,
                        "comments": 0
                    }
                ],
                "questionboard": [
                    {
                        "id": 22,
                        "title": "test1",
                        "category": "question",
                        "worker": "개발자",
                        "content": "test2",
                        "image": null,
                        "create_at": "2021-09-12T16:45:12.362742+09:00",
                        "user": {
                            "id": 2,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "likes": 0,
                        "comments": 0
                    },
                    {
                        "id": 21,
                        "title": "test1",
                        "category": "question",
                        "worker": "개발자",
                        "content": "test2",
                        "image": null,
                        "create_at": "2021-09-12T16:45:11.873442+09:00",
                        "user": {
                            "id": 2,
                            "profile": {
                                "nickname": null,
                                "image": "/media/profile/Untitled.jpeg"
                            }
                        },
                        "likes": 0,
                        "comments": 0
                    }
                ],
                "recruitboard": [
                    {
                        "id": 1,
                        "user": 2,
                        "title": "test1",
                        "study": {
                            "id": 1,
                            "user": 2,
                            "name": "test",
                            "content": "test",
                            "status": true,
                            "member": [
                                2
                            ],
                            "image": null,
                            "stack": [
                                "python"
                            ],
                            "created_at": "2021-09-12T11:06:40.929959+09:00"
                        },
                        "developer": 2,
                        "designer": 0,
                        "pm": 0,
                        "content": "test1",
                        "start_date": "2021-09-12",
                        "end_date": "2021-09-13",
                        "status": true
                    },
                    {
                        "id": 2,
                        "user": 2,
                        "title": "test2",
                        "study": {
                            "id": 1,
                            "user": 2,
                            "name": "test",
                            "content": "test",
                            "status": true,
                            "member": [
                                2
                            ],
                            "image": null,
                            "stack": [
                                "python"
                            ],
                            "created_at": "2021-09-12T11:06:40.929959+09:00"
                        },
                        "developer": 2,
                        "designer": 0,
                        "pm": 0,
                        "content": "test2",
                        "start_date": "2021-09-12",
                        "end_date": "2021-09-13",
                        "status": true
                    }
                ]
            }
        """
        common_paginator = WholeBoardCommonPageNumberPagination()
        recruit_paginator = WholeBoardRecruitmentPageNumberPagination()
        free_posts = CommonBoard.objects.filter(category="free")
        free_posts = self.filter_queryset(free_posts)
        free_posts = common_paginator.paginate_queryset(free_posts, request)
        free_serializer = CommonBoardSerializer(free_posts, many=True)
        question_posts = CommonBoard.objects.filter(category="question")
        question_posts = self.filter_queryset(question_posts)
        question_posts = common_paginator.paginate_queryset(question_posts, request)
        question_serializer = CommonBoardSerializer(question_posts, many=True)
        recruit_posts = RecruitmentBoard.objects.all()
        recruit_posts = self.filter_queryset(recruit_posts)
        recruit_posts = recruit_paginator.paginate_queryset(recruit_posts, request)
        recruit_serializer = RecruitmentBoardSerializer(recruit_posts, many=True)
        return JsonResponse({
            "freeboard": free_serializer.data,
            "questionboard": question_serializer.data,
            "recruitboard" : recruit_serializer.data
        })


class BoardMyListAPIView(GenericAPIView):
    serializer_class = CommonBoardSerializer

    def get(self, request, pk):
        """
            my게시판 list (GET)

            ---
                [{
                "id":1,
                "title":"asd",
                "category":"free",
                "content":"asdasdasd",
                "image":null,
                "create_at":"2021-09-12T07:11:57.299117+09:00",
                "user":{"id":1,"profile":{"nickname":null,"image":"/media/profile/Untitled.jpeg"}},"worker":"개발자"}]
        """
        boards = CommonBoard.objects.filter(user=pk)
        serializer = CommonBoardSerializer(boards, many=True)
        return Response(serializer.data)

class RecruitmentBoardPostMyListAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer

    def get(self, request, pk):
        """
            my모집게시판 list (GET)

            ---
                [{
                "user":1,
                "title":"getit",
                "study":{"id":3,"user":2,"name":"리액트","content":"ㅁㄴㅇㅁㄴㅇ","status":true,"member":[2],"image":null,"stack":["drf","mysql","docker"],"created_at":"2021-09-12T07:48:24.974159+09:00"},
                "developer":2,
                "designer":2,
                "pm":2,
                "content":"겟잇프로젝트",
                "start_date":"2021-09-12",
                "end_date":"2021-09-12",
                "status":true,
                "worker":"개발자",
                "stack":["postgre","docker","k8s"]}]
        """
        boards = RecruitmentBoard.objects.filter(user=pk)
        serializer = RecruitmentBoardSerializer(boards, many=True)
        return Response(serializer.data)