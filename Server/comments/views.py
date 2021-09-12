from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import get_object_or_404, GenericAPIView
from rest_framework.parsers import MultiPartParser
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsOwnerOrReadOnly

# Create your views here.
class CommentListAPIView(GenericAPIView):
    serializer_class = CommentSerializer

    def get(self, request, board_id):
        """
            댓글 list (GET)

            ---
                [
                {
                "user":2,
                "commonpost":1,
                "recruitmentpost":null,
                "content":"test",
                "create_at":"2021-09-12T07:54:17.371579+09:00"
                }]
        """
        posts = Comment.objects.filter(commonpost=board_id)
        serializer = CommentSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, board_id):
        """
            댓글 list (POST)

            ---
                [
                {
                "user":2,
                "commonpost":1,
                "recruitmentpost":null,
                "content":"test",
                "create_at":"2021-09-12T07:54:17.371579+09:00"
                }]
        """
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentDetailAPIView(GenericAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Comment

    def get_object(self, pk, board_id):
        return get_object_or_404(Comment, pk=pk, commonpost=board_id)

    def get(self, request, pk, board_id):
        """
            댓글 detail (GET)

            ---
                {
                "user":2,
                "commonpost":1,
                "recruitmentpost":null,
                "content":"test",
                "create_at":"2021-09-12T07:54:17.371579+09:00"
                }
        """
        post = self.get_object(pk, board_id)
        serializer = CommentSerializer(post)
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
                "create_at":"2021-09-12T07:54:17.371579+09:00"
                }
        """
        post = self.get_object(pk, board_id)
        serializer = CommentSerializer(post, data=request.data)
        self.check_object_permissions(self.request, post)
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

class CommentMyListAPIView(GenericAPIView):
    serializer_class = CommentSerializer

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
        comments = Comment.objects.filter(user=pk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)