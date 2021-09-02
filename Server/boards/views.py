from rest_framework.generics import GenericAPIView
from rest_framework.parsers import MultiPartParser
from .permissions import IsOwnerOrReadOnly
from .serializers import CommonBoardPostSerializer, RecruitmentBoardSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CommonBoard, RecruitmentBoard
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView


# Create your views here.

class CommonBoardPostListAPIView(GenericAPIView):
    serializer_class = CommonBoardPostSerializer

    # parser_classes = (MultiPartParser,)

    def get(self, request):
        posts = CommonBoard.objects.all()
        serializer = CommonBoardPostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CommonBoardPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommonBoardPostDetailAPIView(GenericAPIView):
    serializer_class = CommonBoardPostSerializer
    permission_classes = [IsOwnerOrReadOnly]

    # parser_classes = (MultiPartParser,)

    def get_object(self, pk):
        return get_object_or_404(CommonBoard, pk=pk)

    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = CommonBoardPostSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = CommonBoardPostSerializer(post, data=request.data)
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