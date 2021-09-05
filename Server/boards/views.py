import json

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import GenericAPIView
from rest_framework.parsers import MultiPartParser
from .permissions import IsOwnerOrReadOnly
from .serializers import CommonBoardSerializer, RecruitmentBoardSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CommonBoard, RecruitmentBoard
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from .pagenation import BoardPageNumberPagination


class CommonBoardListAPIView(GenericAPIView):

    serializer_class = CommonBoardSerializer
    pagination_class = BoardPageNumberPagination
    ordering_fields = ['create_at']

    def get(self, request):
        """
            질문/자유 게시글 list (GET)

            ---
                127.0.0.1:8000/api/board?category=free(question)
                - id : 게시판 번호
                - user : 글쓴이 번호(user id)
                - title : 제목
                - category : 자유게시판, 질문게시판 둘중 하나로
                - content : 내용
                - image : 이미지
                - create_at : 생성 시간
        """
        category = request.GET.get('category')
        print(category)
        if category == 'free':
            posts = CommonBoard.objects.filter(category="자유 게시판")
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True)
            return Response(serializer.data)
        elif category == 'question':
            posts = CommonBoard.objects.filter(category="질문 게시판")
            paginator = BoardPageNumberPagination()
            result_page = paginator.paginate_queryset(posts, request)
            serializer = CommonBoardSerializer(result_page, many=True)
            return Response(serializer.data)


    def post(self, request):
        """
            질문/자유 게시글 list (POST)

            ---
                - id : 게시판 번호
                - user : 글쓴이 번호(user id)
                - title : 제목
                - category : 자유게시판, 질문게시판 둘중 하나로
                - content : 내용
                - image : 이미지
                - create_at : 생성 시간
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
                - id : 게시판 번호
                - user : 글쓴이 번호(user id)
                - title : 제목
                - category : 자유게시판, 질문게시판 둘중 하나로
                - content : 내용
                - image : 이미지
                - create_at : 생성 시간
        """
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post)
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

    # parser_classes = (MultiPartParser,)

    def get(self, request):
        posts = RecruitmentBoard.objects.all()
        serializer = RecruitmentBoardSerializer(posts, many=True)
        return Response(serializer.data)

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