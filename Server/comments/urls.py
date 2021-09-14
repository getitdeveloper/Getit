from django.urls import path

from .views import CommentListAPIView, CommentDetailAPIView, CommentMyListAPIView

urlpatterns = [
    path('<int:board_id>/comment/', CommentListAPIView.as_view(), name="comment_list"),
    path('<int:board_id>/comment/<int:pk>/', CommentDetailAPIView.as_view(), name="comment_detail"),
    path('mycomment/<int:pk>/', CommentMyListAPIView.as_view(), name="mycomment_list"),
]