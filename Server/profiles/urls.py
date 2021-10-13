from django.urls import path

from profiles.views import ProfileDetail, TeamProfileDetail, TeamProfileCreate

from profiles.views import teamprofile_create

urlpatterns = [
    path('profile/<int:user_pk>/', ProfileDetail.as_view(), name='profile_detail'),
    path('<int:user_pk>/teamprofilecreate/', teamprofile_create, name='team_profile_create'),
    path('<int:user_id>/teamprofile/<int:id>/', TeamProfileDetail.as_view(), name='team_profile'),
]