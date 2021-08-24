from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, DjangoObjectPermissions, \
    DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from profiles.models import Profile, Group
from profiles.serializers import GroupCreationSerializer, ProfileSerializer, IsOwnerOrReadOnly
from tags.models import Tag


class ProfileDetail(APIView):

    permission_classes = [IsOwnerOrReadOnly, IsAuthenticatedOrReadOnly]

    def get_object(self, user_pk):
        return get_object_or_404(Profile, user_pk=user_pk)

    def get(self, request, user_pk):
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile)

        return Response(serializer.data)

    def post(self, request, user_pk):
        profile = self.get_object(user_pk)
        serializer = ProfileSerializer(profile, data=request.data)
        self.check_object_permissions(self.request, profile)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GroupProfileViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupCreationSerializer