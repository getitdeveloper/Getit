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
    queryset = CommonBoard.objects.all()
    serializer_class = CommonBoardSerializer
    pagination_class = BoardPageNumberPagination

    # parser_classes = (MultiPartParser,)

    def get(self, request):
        posts = CommonBoard.objects.all()
        paginator = BoardPageNumberPagination()
        result_page = paginator.paginate_queryset(posts, request)
        serializer = CommonBoardSerializer(result_page, many=True)
        return Response(serializer.data)

    def post(self, request):
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
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = CommonBoardSerializer(post, data=request.data)
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