from rest_framework import permissions
from django.contrib.auth import get_user_model


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_authenticated:
            if request.user.is_staff:
                return True
            elif request.method in permissions.SAFE_METHODS:
                return True
            elif hasattr(obj, 'user_pk'):
                return obj.user_pk == request.user.id
            elif obj.__class__ == get_user_model():
                return obj.user_pk == request.user.id
            return False
        else:
            return False