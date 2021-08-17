from django.urls import path, include
from rest_framework.routers import DefaultRouter

from profiles.views import CreateProfileViewSet

router = DefaultRouter()
router.register(r'profile', CreateProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]