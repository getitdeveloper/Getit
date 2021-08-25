from django.contrib.auth import get_user_model
from rest_framework import serializers, permissions
from rest_framework.serializers import ModelSerializer

from profiles.models import Profile, Group


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'user_pk', 'nickname', 'job', 'developer_level', 'designer_and_pm_level', 'image', 'mymail', 'myinfo', 'mygit', 'portfolio',)

class GroupCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'