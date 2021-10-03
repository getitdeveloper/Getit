from rest_framework import permissions
from django.contrib.auth import get_user_model
from accounts.models import User
from rest_framework_simplejwt.models import TokenUser

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif request.method == 'POST':
            return request.user.id == request.data.get('user')
        else:
            return False

class LikePostIsOwnerOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.resolver_match.kwargs.get('user_id') == request.user.id