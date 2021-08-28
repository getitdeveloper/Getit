from django.urls import path

from profiles.views import PersonalProfileDetail


urlpatterns = [
    path('profile/<int:user_pk>/', PersonalProfileDetail.as_view(), name='profile_detail'),
]