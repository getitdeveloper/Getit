from rest_framework.serializers import Serializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from profiles.models import Profile, Group
from profiles.serializers import ProfileSerializer, GroupCreationSerializer

# class CustomAPIView(APIView):
#     def get_permissions(self):
#         # Instances and returns the dict of permissions that the view requires.
#         return {key: [permission() for permission in permissions] for key, permissions in self.permission_classes.items()}

#     def check_permissions(self, request):
#         # Gets the request method and the permissions dict, and checks the permissions defined in the key matching
#         # the method.
#         method = request.method.lower()
#         for permission in self.get_permissions()[method]:
#             if not permission.has_permission(request, self):
#                 self.permission_denied(
#                     request, message=getattr(permission, 'message', None)
#                 )

class ProfileDetail(GenericAPIView):
    """
    개인 프로필
    ---
    """
    serializer_class = ProfileSerializer
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