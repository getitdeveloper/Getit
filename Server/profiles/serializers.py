from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Profile, TeamProfile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'user_pk', 'nickname', 'job', 'developer_level', 'designer_and_pm_level', 'image', 'email', 'info','stacks', 'git', 'portfolio',)

class TeamProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamProfile
        fields = '__all__'