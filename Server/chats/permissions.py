from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from profiles.models import TeamProfile
from django.contrib.auth import get_user_model

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif request.method == 'POST':
            return request.user.id == request.data.get('sender')
        else:
            return False

    def has_object_permission(self, request, view, obj):
        if request.user.is_authenticated:
            if request.user.is_staff:
                return True
            elif hasattr(obj, 'sender'):
                return obj.sender == request.user.id
            elif obj.__class__ == get_user_model():
                return obj.sender == request.user.id
            return False
        else:
            return False