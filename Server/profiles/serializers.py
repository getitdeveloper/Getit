from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from profiles.models import Profile, Group


class ProfileCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class GroupCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'