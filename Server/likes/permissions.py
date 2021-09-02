from rest_framework import permissions
from django.contrib.auth import get_user_model
from accounts.models import User

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        print(request.user)
        return request.user and request.user.is_authenticated

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