from rest_framework import viewsets, status
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.response import Response

from tags.models import Tag
from tags.serializers import ProfileTagSerializer, CommonBoardTagSerializer, TeamProfileTagSerializer, \
    RecruitBoardTagSerializer


class ProfileTagAPI(GenericAPIView):
    serializer_class = ProfileTagSerializer

    def get_object(self, profile_pk):
        return get_object_or_404(Tag, profile=profile_pk)

    def get(self, request, user_pk):
        """
            개인 프로필 태그

                ---
                # GET request 예시
                    {
                        "name":"django","react",
                        "profile":"1"
                        }
        """
        profile = self.get_object(user_pk)
        serializer = ProfileTagSerializer(profile)
        return Response(serializer.data)

    def post(self, request, profile_pk):
        """
            개인 프로필 태그

                ---
                # POST Response 예시
                    {
                        "name":"django","react",
                        "profile":"1"
                        }
        """
        profile = self.get_object(profile_pk)
        serializer = ProfileTagSerializer(profile, data=request.data)
        self.check_object_permissions(self.request, profile)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeamProfileTagAPI(GenericAPIView):
    serializer_class = TeamProfileTagSerializer

    def get_object(self, teamprofile_pk):
        return get_object_or_404(Tag, teamprofile=teamprofile_pk)

    def get(self, request, teamprofile_pk):
        """
            팀 프로필 태그

                ---
                # GET request 예시
                    {
                        "name":"django","react",
                        "teamprofile":"1"
                        }
        """
        teamprofile = self.get_object(teamprofile_pk)
        serializer = ProfileTagSerializer(teamprofile)
        return Response(serializer.data)

    def post(self, request, teamprofile_pk):
        """
            팀 프로필 태그

                ---
                # POST Response 예시
                    {
                        "name":"django","react",
                        "teamprofile":"1"
                        }
        """
        teamprofile = self.get_object(teamprofile_pk)
        serializer = ProfileTagSerializer(teamprofile, data=request.data)
        self.check_object_permissions(self.request, teamprofile)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommonBoardTagAPI(GenericAPIView):
    serializer_class = CommonBoardTagSerializer

    def get_object(self, post_pk):
        return get_object_or_404(Tag, post=post_pk)

    def get(self, request, post_pk):
        """
            게시판 태그

                ---
                # GET request 예시
                    {
                        "name":"django","react",
                        "post":"1"
                        }
        """
        post = self.get_object(post_pk)
        serializer = ProfileTagSerializer(post)
        return Response(serializer.data)

    def post(self, request, post_pk):
        """
            개인 프로필 태그

                ---
                # POST Response 예시
                    {
                        "name":"django","react",
                        "teamprofile":"1"
                        }
        """
        post = self.get_object(post_pk)
        serializer = ProfileTagSerializer(post, data=request.data)
        self.check_object_permissions(self.request, post)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecruitBoardTagAPI(GenericAPIView):
    serializer_class = RecruitBoardTagSerializer

    def get_object(self, recruit_pk):
        return get_object_or_404(Tag, recruitpost=recruit_pk)

    def get(self, request, recruit_pk):
        """
            게시판 태그

                ---
                # GET request 예시
                    {
                        "name":"django","react",
                        "post":"1"
                        }
        """
        recruitpost = self.get_object(recruit_pk)
        serializer = ProfileTagSerializer(recruitpost)
        return Response(serializer.data)

    def post(self, request, recruit_pk):
        """
            개인 프로필 태그

                ---
                # POST Response 예시
                    {
                        "name":"django","react",
                        "teamprofile":"1"
                        }
        """
        recruitpost = self.get_object(recruit_pk)
        serializer = ProfileTagSerializer(recruitpost, data=request.data)
        self.check_object_permissions(self.request, recruitpost)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

