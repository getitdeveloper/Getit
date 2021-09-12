import json

from drf_yasg import openapi
from rest_framework.filters import SearchFilter
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.parsers import MultiPartParser

from tags.models import Tag
from .permissions import IsOwnerOrReadOnly, RecruitmentIsOwnerOrReadOnly
from .serializers import RecruitmentBoardSerializer, CommonBoardListSerializer, CommonBoardDetailSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CommonBoard, RecruitmentBoard
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from .pagenation import BoardPageNumberPagination
from rest_framework import viewsets


class CommonBoardListAPIView(GenericAPIView):
    queryset = CommonBoard.objects.all()
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommonBoardListSerializer
    pagination_class = BoardPageNumberPagination
    ordering_fields = ['create_at']
    filter_backends = [SearchFilter]
    search_fields = ['title', 'content','worker',]

    def get(self, request):
        """
            질문/자유 게시글 list (GET)

            ---
                127.0.0.1:8000/api/board?category=free(question)
                "results":
                {
                "id":32,
                "title":"다라",
                "category":"free",
                "content":"테스틐글입니다.",
                "image":null,
                "create_at":"2021-09-08T19:30:23.300228+09:00",
                "user":{
                    "id":3,
                    "profile":{
                        "nickname":"asdvxc",
                        "image":"/media/profile/Untitled.jpeg"}},
        """
        category = request.GET.get('category')
        queryset = self.get_queryset()
        if category == 'free':
            posts = CommonBoard.objects.filter(category=category)
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardListSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        elif category == 'question':
            posts = CommonBoard.objects.filter(category=category)
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardListSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            posts = CommonBoard.objects.all()
            posts = self.filter_queryset(posts)
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardListSerializer(result_page, many=True)
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

        serializer = CommonBoardListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommonBoardDetailAPIView(GenericAPIView):

    serializer_class = CommonBoardDetailSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk):
        return get_object_or_404(CommonBoard, pk=pk)

    def get(self, request, pk, format=None):
        """
            질문/자유 게시글 detail (GET)

            ---
                {
                "id":1,
                "title":"asd",
                "category":"free",
                "content":"asdasdasd",
                "image":null,
                "create_at":"2021-09-12T07:11:57.299117+09:00",
                "user":1,
                "worker":"개발자"
                }
        """
        post = self.get_object(pk)
        serializer = CommonBoardDetailSerializer(post)
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
        serializer = CommonBoardDetailSerializer(post, data=request.data)
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
        posts = RecruitmentBoard.objects.all()
        posts = self.filter_queryset(posts)
        paginator = BoardPageNumberPagination()
        result_page = paginator.paginate_queryset(posts, request)
        serializer = RecruitmentBoardSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
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
        post = self.get_object(pk)
        serializer = RecruitmentBoardSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
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
        post = self.get_object(pk)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BoardMyListAPIView(GenericAPIView):
    serializer_class = CommonBoardListSerializer

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
        serializer = CommonBoardListSerializer(boards, many=True)
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