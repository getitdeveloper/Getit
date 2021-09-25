import json

import requests
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
from .models import CommonBoard, RecruitmentBoard, ChoicesFilter
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

                "count": 13,
                "next": "http://127.0.0.1:8000/api/board/?page=2",
                "previous": null,
                "results": [
                    {
                        "id": 13,
                        "title": "asdasdasd",
                        "category": "question",
                        "worker": ["개발자"],
                        "content": "asdasdasdasd",
                        "image": null,
                        "create_at": "2021-09-19T17:38:17.667158+09:00",
                        "user": {
                            "id": 1,
                            "profile": {
                                "nickname": "edcedc1027",
                                "image": "http://127.0.0.1:8000/media/profile/Untitled.jpeg"
                            }
                        },
                        "likes": 0,
                        "comments": 0,
                        "is_like": false,
                        "stack": [
                            "python",
                            "java"
                        ]
                    },
        """
        category = request.GET.get('category')
        queryset = self.get_queryset()
        if category == 'free':
            posts = CommonBoard.objects.filter(category=category)
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True, context={'request': request})
            return paginator.get_paginated_response(serializer.data)
        elif category == 'question':
            posts = CommonBoard.objects.filter(category=category)
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True, context={'request': request})
            return paginator.get_paginated_response(serializer.data)
        else:
            posts = CommonBoard.objects.all()
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True, context={'request': request})
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
                    "user":1,
                    "stack":["python", "java"],
                    "worker": ["개발자","디자이너","기획자"]
                }
        """
        serializer = CommonBoardSerializer(data=request.data,context={'request': request})
        print(request)
        if serializer.is_valid():
            serializer.save()
            board = CommonBoard.objects.get(id=serializer.data['id'])

            names = request.data['stack']
            filters = request.data['worker']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                board.stack.add(_name)
            for filter in filters:
                if not filter:
                    continue
                _filter, _ = ChoicesFilter.objects.get_or_create(workers=filter)
                board.worker.add(_filter)
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommonBoardDetailAPIView(GenericAPIView):

    serializer_class = CommonBoardSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk):
        post = get_object_or_404(CommonBoard, pk=pk)
        return post

    def get(self, request, pk, format=None):
        """
            질문/자유 게시글 detail (GET)

            ---
                {
                "id":3,
                "title":"asdasdasd",
                "category":"question",
                "content":"asdasdasdasd",
                "image":null,
                "create_at":"2021-09-19T17:25:49.076897+09:00",
                "user":
                    {
                    "id":1,
                    "profile":{
                        "nickname":"edcedc1027",
                        "image":"http://127.0.0.1:8000/media/profile/Untitled.jpeg"
                        }},
                "likes":0,
                "comments":0,
                "is_like":false,
                "stack":["python","java"],
                "worker": ["개발자","디자이너","기획자"]
                }
        """
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post,context={'request': request})
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
                    "stack":["python", "java"],
                    "worker": ["개발자","디자이너","기획자"]
                }
        """
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            post.stack.clear()
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)

                post.stack.add(_name)
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
                    "id": 8,
                    "title": "getit",
                    "developer": 2,
                    "designer": 0,
                    "pm": 0,
                    "content": "test2",
                    "stack": [],
                    "worker": ["개발자"],
                    "start_date": "2021-09-12",
                    "end_date": "2021-09-13",
                    "status": true,
                    "create_at": "2021-09-22T01:49:40.310951+09:00",
                    "user": {
                        "id": 1,
                        "profile": {
                            "nickname": "edcedc1027",
                            "image": "http://127.0.0.1:8000/media/profile/Untitled.jpeg"
                        }
                    },
                    "study": {
                        "id": 2,
                        "user": 1,
                        "name": "장고",
                        "content": "ㅁㄴㅇㅁㄴㅇ",
                        "status": true,
                        "image": null,
                        "stack": [
                            "drf",
                            "mysql"
                        ],
                        "created_at": "2021-09-19T17:18:20.434826+09:00"
                    },
                    "comments": 0,
                    "likes": 0,
                    "is_like": false
                }
        """
        posts = RecruitmentBoard.objects.all()
        posts = self.filter_queryset(posts)
        paginator = BoardPageNumberPagination()
        result_page = paginator.paginate_queryset(posts, request)
        serializer = RecruitmentBoardSerializer(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        """
            모집 게시글 list (POST)

            ---
                {
                    "user": 1,
                    "study": 2,
                    "title":"getit",
                    "developer": 2,
                    "designer": 0,
                    "pm": 0,
                    "content": "test2",
                    "start_date": "2021-09-12",
                    "end_date": "2021-09-13",
                    "status": true,
                    "worker": ["개발자"],
                    "stack":["spring","vue"]

                }
        """
        serializer = RecruitmentBoardSerializer(data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            board = RecruitmentBoard.objects.get(id=serializer.data['id'])
            names = request.data['stack']
            filters = request.data['worker']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                board.stack.add(_name)
            for filter in filters:
                if not filter:
                    continue
                _filter, _ = ChoicesFilter.objects.get_or_create(workers=filter)
                board.worker.add(_filter)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RecruitmentBoardPostDetailAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer
    permission_classes = [RecruitmentIsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk):
        return get_object_or_404(RecruitmentBoard, pk=pk)

    def get(self, request, pk, format=None):
        """
            모집 게시글 detail (GET)

            ---
                {
                    "id": 6,
                    "title": "asdasd",
                    "developer": 2,
                    "designer": 0,
                    "pm": 0,
                    "content": "test",
                    "stack": [
                        "python",
                        "react"
                    ],
                    "worker": ["개발자"],
                    "start_date": "2021-09-12",
                    "end_date": "2021-09-13",
                    "status": true,
                    "create_at": "2021-09-22T01:25:44.660147+09:00",
                    "user": {
                        "id": 1,
                        "profile": {
                            "nickname": "edcedc1027",
                            "image": "http://127.0.0.1:8000/media/profile/Untitled.jpeg"
                        }
                    },
                    "study": {
                        "id": 2,
                        "user": 1,
                        "name": "장고",
                        "content": "ㅁㄴㅇㅁㄴㅇ",
                        "status": true,
                        "image": null,
                        "stack": [
                            "drf",
                            "mysql"
                        ],
                        "created_at": "2021-09-19T17:18:20.434826+09:00"
                    },
                    "comments": 0,
                    "likes": 0,
                    "is_like": false
                }
        """
        post = self.get_object(pk)
        serializer = RecruitmentBoardSerializer(post,context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk):
        """
        모집 게시글 detail (PUT)

        ---
            {
                    "user": 1,
                    "study": 2,
                    "title":"getit",
                    "developer": 2,
                    "designer": 0,
                    "pm": 0,
                    "content": "test2",
                    "start_date": "2021-09-12",
                    "end_date": "2021-09-13",
                    "status": true,
                    "stack":["spring","vue"],
                    "worker": ["개발자"],
                }
        """
        post = self.get_object(pk)
        serializer = RecruitmentBoardSerializer(post, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            names = request.data['stack']
            post.stack.clear()
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)

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
                        "worker": ["개발자"],
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
                [
                    {
                        "id": 9,
                        "title": "asdasdasd",
                        "category": "question",
                        "worker": ["개발자"],
                        "content": "asdasdasdasd",
                        "image": null,
                        "create_at": "2021-09-16T20:12:22.257748+09:00",
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
                        "id": 4,
                        "title": "asdasdasd1",
                        "category": "question",
                        "worker": "개발자",
                        "content": "asdasdasdasd1",
                        "image": null,
                        "create_at": "2021-09-16T19:29:51.178213+09:00",
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
                ]
        """
        boards = CommonBoard.objects.filter(user=pk)
        serializer = CommonBoardSerializer(boards, many=True,context={'request': request})
        return Response(serializer.data)

class RecruitmentBoardPostMyListAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer

    def get(self, request, pk):
        """
            my모집게시판 list (GET)

            ---
                [
                    {
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
                        "likes": 0
                    },
                    {
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
                        "likes": 0
                    }
                ]
        """
        boards = RecruitmentBoard.objects.filter(user=pk)
        serializer = RecruitmentBoardSerializer(boards, many=True,context={'request': request})
        return Response(serializer.data)