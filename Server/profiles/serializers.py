from django.contrib.auth import get_user_model
from rest_framework import serializers
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
class ProfileSerializer(ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
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
        )




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


