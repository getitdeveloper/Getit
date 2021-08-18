from django.urls import path, include
from rest_framework.routers import DefaultRouter

from profiles.views import CreateProfileViewSet, GroupProfileViewSet

router = DefaultRouter()
router.register(r'profile', CreateProfileViewSet)
router.register(r'group', GroupProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]