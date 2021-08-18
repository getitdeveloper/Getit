from django.shortcuts import render
from rest_framework import viewsets

from profiles.models import Profile, Group
from profiles.serializers import ProfileCreationSerializer, GroupCreationSerializer


class CreateProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileCreationSerializer

class GroupProfileViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupCreationSerializer