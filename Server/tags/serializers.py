from rest_framework import serializers

from .models import Tag

class nameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)

class ProfileTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name','profile')

class TeamProfileTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name','teamprofile')

class RecruitBoardTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name','recruitpost')

class CommonBoardTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name','commonpost')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name','post')