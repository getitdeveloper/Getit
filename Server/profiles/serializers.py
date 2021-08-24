from rest_framework import permissions, serializers
from django.contrib.auth import get_user_model
from profiles.models import Profile, Group

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

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'user_pk', 'nickname', 'job', 'developer_level', 'designer_and_pm_level', 'image', 'mymail', 'myinfo', 'mygit', 'stacks', 'portfolio',)

class GroupCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'