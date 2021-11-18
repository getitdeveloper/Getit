from .views import CommonBoardListAPIView, CommonBoardDetailAPIView, RecruitmentBoardDesignerFilterView, RecruitmentBoardDeveloperFilterView, RecruitmentBoardPmFilterView, RecruitmentBoardPostDetailAPIView, \
    RecruitmentBoardPostListAPIView, BoardMyListAPIView, RecruitmentBoardPostMyListAPIView, WholePostSearch
from django.urls import path


urlpatterns = [
    path('board/', CommonBoardListAPIView.as_view(), name='common_board_list'),
    path('board/<int:pk>/', CommonBoardDetailAPIView.as_view(), name='common_board_detail'),
    path('recruitmentboard/', RecruitmentBoardPostListAPIView.as_view(), name='recruitment_board_list'),
    path('recruitmentboard_developer', RecruitmentBoardDeveloperFilterView.as_view(), name='recruitment_board_developer_list'),
    path('recruitmentboard_designer', RecruitmentBoardDesignerFilterView.as_view(), name='recruitment_board_designer_list'),
    path('recruitmentboard_pm', RecruitmentBoardPmFilterView.as_view(), name='recruitment_board_pm_list'),
    path('recruitmentboard/<int:pk>/', RecruitmentBoardPostDetailAPIView.as_view(), name='recruitment_board_detail'),
    path('wholepost/', WholePostSearch.as_view(), name='whole_post'),
    path('mycommonboard/<int:pk>/', BoardMyListAPIView.as_view(), name='mycommon_board_list'),
    path('myrecruitmentboard/<int:pk>/',RecruitmentBoardPostMyListAPIView.as_view(), name= 'myrecruitment_board_list'),
]