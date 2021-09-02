from django.urls import path

from profiles.views import ProfileDetail


urlpatterns = [
    path('profile/<int:user_id>/', ProfileDetail.as_view(), name='profile_detail'),
]