from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.parsers import FormParser
from django.http.response import JsonResponse

from boards.models import CommonBoard
from .permissions import IsOwnerOrReadOnly
from rest_framework import serializers, status
from .serializers import LikeSerializer
from .models import Like
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
class LikeAPIView(GenericAPIView):
    serializer_class = LikeSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        post = CommonBoard.objects.get(id=self.kwargs['post_id'])
        return Like.objects.filter(user=user, post=post)

    @swagger_auto_schema(
        operation_description="좋아요",
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="Like Response",
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
        likes = Like.objects.filter(post_id=board_id)
        serializer = LikeSerializer(likes, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        operation_description="좋아요",
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="Like Response",
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
            likes = Like.objects.filter(post_id=board_id).count()
            return JsonResponse({'counts': likes})
        Like.objects.create(post_id=board_id, user=request.user)
        likes = Like.objects.filter(post_id=board_id).count()
        return JsonResponse({'counts': likes})