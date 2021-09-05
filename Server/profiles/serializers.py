from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from portfolios.models import Portfolio
from tags.models import Tag
from .models import Profile, TeamProfile
class StackSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)

class ProfileSerializer(ModelSerializer):
    name = StackSerializer(many=True)
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
            'name',
        )

class TeamProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamProfile
        fields = '__all__'