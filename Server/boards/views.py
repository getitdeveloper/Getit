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
    search_fields = ['title', 'content']

    def get(self, request):
        """
            질문/자유 게시글 list (GET)

            ---
                127.0.0.1:8000/api/board?category=free(question)
                "results":
                [
                {
                "id":32,
                "title":"다라",
                "category":"free",
                "content":"aㅁㄴㅁㄴㅇd",
                "image":null,
                "create_at":"2021-09-08T19:30:23.300228+09:00",
                "user":{
                    "id":3,
                    "profile":{
                        "nickname":"asdvxc",
                        "image":"/media/profile/Untitled.jpeg"}},
                        "stack":["python","java"]}
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
                    "stack":["python", "java"]
                }
        """

        serializer = CommonBoardListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            board = CommonBoard.objects.get(id=serializer.data['id'])

            names = request.data['stack']
            for name in names:
                if not name:
                    continue
                _name, _ = Tag.objects.get_or_create(name=name)
                board.stack.add(_name)
            serializer.data['stack'].append(names)
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
                - id : 게시판 번호
                - user : 글쓴이 번호(user id)
                - title : 제목
                - category : 자유게시판, 질문게시판 둘중 하나로
                - content : 내용
                - image : 이미지
                - create_at : 생성 시간
        """
        post = self.get_object(pk)
        serializer = CommonBoardDetailSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        """
            질문/자유 게시글 detail (PUT:수정)

            ---
                - id : 게시판 번호
                - user : 글쓴이 번호(user id)
                - title : 제목
                - category : 자유게시판, 질문게시판 둘중 하나로
                - content : 내용
                - image : 이미지
                - create_at : 생성 시간
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
    search_fields = ['content']

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
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = self.get_object(pk)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)