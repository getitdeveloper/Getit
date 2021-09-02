from django.db import router
from django.urls import path, include
from tags.views import ProfileTagAPI, TeamProfileTagAPI,CommonBoardTagAPI, RecruitBoardTagAPI

urlpatterns = [
    path('tag/profile/<int:profile_id>', ProfileTagAPI.as_view(),name='profile_tag'),
    path('tag/teamprofile/<int:teamprofile_id>', TeamProfileTagAPI.as_view(),name='teamprofile_tag'),
    path('tag/commonboard/<int:commonpost_id>', CommonBoardTagAPI.as_view(),name='board_tag'),
    path('tag/recruitboard/<int:recruitpost_id>', RecruitBoardTagAPI.as_view(),name='recruitboard_tag'),
]