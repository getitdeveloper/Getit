from rest_framework.generics import get_object_or_404
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsOwnerOrReadOnly


# Create your views here.
class CommentListAPIView(APIView):
    serializer_class = CommentSerializer

    # parser_classes = (MultiPartParser,)

    def get(self, request, question_id):
        posts = Comment.objects.filter(question_id=question_id)
        serializer = CommentSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, question_id):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentDetailAPIView(APIView):
    serializer_class = CommentSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk, question_id):
        return get_object_or_404(Comment, pk=pk, question_id=question_id)

    def get(self, request, pk, question_id):
        post = self.get_object(pk, question_id)
        serializer = CommentSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk, question_id):
        post = self.get_object(pk, question_id)
        serializer = CommentSerializer(post, data=request.data)
        self.check_object_permissions(self.request, post)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, question_id):
        post = self.get_object(pk, question_id)
        self.check_object_permissions(self.request, post)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)