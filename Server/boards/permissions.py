from rest_framework import permissions
from profiles.models import TeamProfile
from django.contrib.auth import get_user_model

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.id == request.data.get('user')

    def has_object_permission(self, request, view, obj):
        if request.user.is_authenticated:
            if request.user.is_staff:
                return True
            elif request.method in permissions.SAFE_METHODS:
                return True
            elif hasattr(obj, 'user'):
                return obj.user.id == request.user.id
            elif obj.__class__ == get_user_model():
                return obj.user.id == request.user.id
            return False
        else:
            return False

class RecruitmentIsOwnerOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        study_user = TeamProfile.objects.get(id=request.data.get('study')).user.id
        return request.user.id == request.data.get('user') and request.user.id == study_user