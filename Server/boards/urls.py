from .views import CommonBoardPostDetailAPIView, RecruitmentBoardPostDetailAPIView, RecruitmentBoardPostListAPIView
from .views import CommonBoardPostListAPIView
from django.urls import path


urlpatterns = [
    path('commonboard/', CommonBoardPostListAPIView.as_view(), name='common_board_list'),
    path('commonboard/<int:pk>/', CommonBoardPostDetailAPIView.as_view(), name='common_board_detail'),
    path('recruitmentboard/', RecruitmentBoardPostListAPIView.as_view(), name='recruitment_board_list'),
    path('recruitmentboard/<int:pk>/', RecruitmentBoardPostDetailAPIView.as_view(), name='recruitment_board_detail'),
]