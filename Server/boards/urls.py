from .views import CommonBoardListAPIView, CommonBoardDetailAPIView, RecruitmentBoardPostDetailAPIView, RecruitmentBoardPostListAPIView
from django.urls import path


urlpatterns = [
    path('board/', CommonBoardListAPIView.as_view(), name='common_board_list'),
    path('board/<int:pk>/', CommonBoardDetailAPIView.as_view(), name='common_board_detail'),
    path('recruitmentboard/', RecruitmentBoardPostListAPIView.as_view(), name='recruitment_board_list'),
    path('recruitmentboard/<int:pk>/', RecruitmentBoardPostDetailAPIView.as_view(), name='recruitment_board_detail'),
]