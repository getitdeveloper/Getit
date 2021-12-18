from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from portfolios.models import Portfolio
from tags.models import Tag
from .models import Profile, TeamProfile
from members.models import Member
from members.serializers import MemberSerializer


class TagSerializer(serializers.ModelSerializer):

    def to_representation(self, value):
        return value.name
    
    class Meta:
        model = Tag
        fields = ('name',)

class TeamProfileReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamProfile
        fields = (
            'id',
            'title',
            'status',
        )

class PortfolioReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = (
            'id',
            'title',
        )

class ProfileSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    teamprofiles = SerializerMethodField()
    portfolios = SerializerMethodField()


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
            'stack',
            'teamprofiles',
            'portfolios',
        )
    def get_teamprofiles(self,obj):
        id = obj.id
        teamprofiles = TeamProfile.objects.filter(user=id)
        serializer = TeamProfileReadSerializer(teamprofiles, many=True)
        return serializer.data

    def get_portfolios(self,obj):
        id = obj.id
        portfolios = Portfolio.objects.filter(user=id)
        serializers = PortfolioReadSerializer(portfolios, many=True)
        return serializers.data




class TeamProfileSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    members = MemberSerializer(read_only=True, many=True)

    class Meta:
        model = TeamProfile
        fields = (
            'id',
            'user',
            'title',
            'content',
            'status',
            'image',
            'stack',
            'created_at',
            'members'
        )


