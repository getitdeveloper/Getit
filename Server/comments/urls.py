from django.urls import path

from .views import CommentListAPIView, CommentDetailAPIView

urlpatterns = [
    path('<int:question_id>/comments/', CommentListAPIView.as_view(), name="comment_list"),
    path('<int:question_id>/comment/<int:pk>/', CommentDetailAPIView.as_view(), name="comment_detail"),
]