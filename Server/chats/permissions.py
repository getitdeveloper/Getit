from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from chats.models import ChatMember
from profiles.models import TeamProfile
from django.contrib.auth import get_user_model

class MessageListIsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.resolver_match.kwargs.get('sender') == request.user.id
        else:
            return False

class MessageDetailIsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.user.id == ChatMember.objects.filter(chatroom_id=request.resolver_match.kwargs.get('chat_room')).me_id
        return request.user.id == request.data.get('sender')