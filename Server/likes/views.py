from boards.serializers import RecruitmentBoardSerializer
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.parsers import FormParser
from django.http.response import JsonResponse

from boards.models import CommonBoard, RecruitmentBoard
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

    @swagger_auto_schema(
        operation_description="좋아요",
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="CommonBoardLike Response",
                schema=resp
            )
        }
    )
    def get(self, request, board_id):
        """
            좋아요 (GET)
            ---
                - user : 글쓴이 번호(user id)
                - commonpost : 게시글 번호(board id)
        """
        likes = CommonBoardLike.objects.filter(commonpost_id=board_id)
        serializer = CommonBoardLikeSerializer(likes, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        operation_description="좋아요",
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="CommonBoardLike Response",
                schema=resp
            )
        }
    )
    def post(self, request, board_id):
        """
            좋아요 (POST)
            ---
                - user : 글쓴이 번호(user id)
                - commonpost : 게시글 번호(board id)
        """
        if self.get_queryset().exists():
            self.get_queryset().delete()
            return JsonResponse({'status': 'remove'})
        CommonBoardLike.objects.create(commonpost_id=board_id, user_id=request.user.id)
        return JsonResponse({'status': 'add'})


class CommonBoardLikePostAPIView(GenericAPIView):
    serializer_class = CommonBoardLikePostSerializer
    permission_classes = [LikePostIsOwnerOnly]

    def get(self, request, user_id):
        posts = CommonBoardLike.objects.filter(user=user_id)
        serializer = CommonBoardLikePostSerializer(posts, many=True)
        return Response(serializer.data)


class RecruitmentBoardLikeAPIView(GenericAPIView):
    serializer_class = RecruitmentBoardSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        post = RecruitmentBoard.objects.get(id=self.kwargs['board_id'])
        return RecruitBoardLike.objects.filter(user=user, recruitpost=post)

    @swagger_auto_schema(
        operation_description="좋아요",
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="RecruitmentBoardLike Response",
                schema=resp
            )
        }
    )
    def get(self, request, board_id):
        """
            좋아요 (GET)
            ---
                - user : 글쓴이 번호(user id)
                - recruitpost : 게시글 번호(board id)
        """
        likes = RecruitBoardLike.objects.filter(recruitpost_id=board_id)
        serializer = RecruitBoardLikeSerializer(likes, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        operation_description="좋아요",
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="RecruitmentBoardLike Response",
                schema=resp
            )
        }
    )
    def post(self, request, board_id):
        """
            좋아요 (POST)
            ---
                - user : 글쓴이 번호(user id)
                - recruitpost : 게시글 번호(board id)
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
        posts = RecruitBoardLike.objects.filter(user=user_id)
        serializer = RecruitBoardLikePostSerializer(posts, many=True)
        return Response(serializer.data)