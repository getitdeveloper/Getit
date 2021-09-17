from django.urls import path

from .views import CommonCommentListAPIView, CommonCommentDetailAPIView, CommonCommentMyListAPIView, RecruitCommentDetailAPIView, RecruitCommentListAPIView, RecruitCommentMyListAPIView

urlpatterns = [
    path('<int:board_id>/commoncomment/', CommonCommentListAPIView.as_view(), name="commoncomment_list"),
    path('<int:board_id>/commoncomment/<int:pk>/', CommonCommentDetailAPIView.as_view(), name="commoncomment_detail"),
    path('mycommoncomment/<int:pk>/', CommonCommentMyListAPIView.as_view(), name="mycommoncomment_list"),
    path('<int:board_id>/recruitcomment/', RecruitCommentListAPIView.as_view(), name="recruitcomment_list"),
    path('<int:board_id>/recruitcomment/<int:pk>/', RecruitCommentDetailAPIView.as_view(), name="recruitcomment_detail"),
    path('myrecruitcomment/<int:pk>/', RecruitCommentMyListAPIView.as_view(), name="myrecruitcomment_list"),
]