from rest_framework import permissions
from django.contrib.auth import get_user_model
from accounts.models import User
from rest_framework_simplejwt.authentication import JWTAuthentication

class IsOwnerOrReadOnly(permissions.BasePermission):

    def get_user(self, request):
        jwt_object = JWTAuthentication()
        header          = jwt_object.get_header(request)
        raw_token       = jwt_object.get_raw_token(header)
        validated_token = jwt_object.get_validated_token(raw_token)
        user            = jwt_object.get_user(validated_token)
        return user

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_authenticated
        return request.user == self.get_user(request)

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

class LikePostIsOwnerOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.id == request.data.get('user')