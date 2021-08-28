from django.contrib.auth import get_user_model
from rest_framework import serializers

from portfolios.models import Portfolio
from .models import Profile, TeamProfile

class PortfoliodetailSerializer(serializers.ModelSerializer):
    class Meta:
        models = Portfolio
        fields = ('id','title', 'images')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'user_pk', 'nickname', 'job', 'developer_level', 'designer_and_pm_level', 'image', 'email', 'info','stacks', 'git', 'portfolio',)

class TeamProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamProfile
        fields = '__all__'