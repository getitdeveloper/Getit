from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from profiles.models import Profile


class ProfileCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'