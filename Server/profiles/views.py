from django.shortcuts import render
from rest_framework import viewsets

from profiles.models import Profile
from profiles.serializers import ProfileCreationSerializer


class CreateProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileCreationSerializer
