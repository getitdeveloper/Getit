from django.db import router
from django.urls import path, include
from tags.views import ProfileTagAPI, TeamProfileTagAPI,CommonBoardTagAPI, RecruitBoardTagAPI

urlpatterns = [
    path('tag/profile/<int:profile_pk>', ProfileTagAPI.as_view(),name='profile_tag'),
    path('tag/teamprofile/<int:teamprofile_pk>', TeamProfileTagAPI.as_view(),name='teamprofile_tag'),
    path('tag/commonboard/<int:post_pk>', CommonBoardTagAPI.as_view(),name='board_tag'),
    path('tag/recruitboard/<int:recruit_pk>', RecruitBoardTagAPI.as_view(),name='recruitboard_tag'),
]