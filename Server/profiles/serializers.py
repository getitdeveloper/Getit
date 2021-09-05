from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolios.models import Portfolio
from .models import Profile, TeamProfile

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'user',
            'user_pk',
            'nickname',
            'job',
            'level',
            'image',
            'email',
            'info',
            'git',
        )

class TeamProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamProfile
        fields = '__all__'