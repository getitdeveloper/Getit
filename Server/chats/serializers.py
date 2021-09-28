from django.db import models
from django.db.models import fields
from django.dispatch.dispatcher import receiver
from rest_framework import serializers
from .models import Message
from profiles.models import Profile
from accounts.models import User
from rest_framework.serializers import ModelSerializer

class SpecificAuthorProfile(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('nickname',)

class UserProfileSerializer(ModelSerializer):
    profile = SpecificAuthorProfile(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'profile',)

class MessageListSerializer(ModelSerializer):

    class Meta:
        model = Message
        fields = ('receiver', 'content', 'create_at',)

    def to_representation(self, instance):
        self.fields['receiver'] = UserProfileSerializer(read_only=True)
        return super().to_representation(instance)

class MessageDetailGetSerializer(ModelSerializer):

    class Meta:
        model = Message
        fields = ('sender', 'content', 'create_at',)

    def to_representation(self, instance):
        self.fields['sender'] = UserProfileSerializer(read_only=True)
        return super().to_representation(instance)

class MessageDetailPostSerializer(ModelSerializer):

    class Meta:
        model = Message
        fields = ('sender', 'receiver', 'content', 'create_at',)