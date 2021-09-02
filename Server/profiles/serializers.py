from django.contrib.auth import get_user_model
from rest_framework import serializers, permissions
from rest_framework.serializers import ModelSerializer

from portfolios.models import Portfolio
from profiles.models import Profile, TeamProfile
from tags.models import Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Tag
        fields = ('id','name')

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Portfolio
        fields = ('id','title', 'contents', 'images')

class ProfileSerializer(serializers.ModelSerializer):
    stacks = TagSerializer(many=True)
    portfolios = PortfolioSerializer(many=True)
    class Meta:
        model = Profile
        fields = ('user', 'user_pk', 'nickname', 'job', 'developer_level', 'designer_and_pm_level', 'image', 'mail', 'info','stacks', 'git', 'portfolios',)

class GroupCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamProfile
        fields = '__all__'