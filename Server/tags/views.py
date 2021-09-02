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

    def get(self, request, user_id):
        """
            개인프로필 태그 (GET)

            ---
                - profile : 개인프로필 번호(profile id)
                - name : 태그명
        """
        profile = self.get_object(user_id)
        serializer = ProfileTagSerializer(profile)
        return Response(serializer.data)

    def post(self, request, profile_id):
        """
            개인프로필 태그 (POST)

            ---
                - profile : 개인프로필 번호(profile id)
                - name : 태그명
        """
        profile = self.get_object(profile_id)
        serializer = ProfileTagSerializer(profile, data=request.data)
        self.check_object_permissions(self.request, profile)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeamProfileTagAPI(GenericAPIView):
    serializer_class = TeamProfileTagSerializer

    def get_object(self, teamprofile_id):
        return get_object_or_404(Tag, teamprofile=teamprofile_id)

    def get(self, request, teamprofile_id):
        """
            팀프로필 태그 (GET)

            ---
                - teamprofile : 팀프로필 번호(teamprofile id)
                - name : 태그명
        """
        teamprofile = self.get_object(teamprofile_id)
        serializer = ProfileTagSerializer(teamprofile)
        return Response(serializer.data)

    def post(self, request, teamprofile_id):
        """
            팀프로필 태그 (POST)

            ---
                - teamprofile : 팀프로필 번호(teamprofile id)
                - name : 태그명
        """
        teamprofile = self.get_object(teamprofile_id)
        serializer = ProfileTagSerializer(teamprofile, data=request.data)
        self.check_object_permissions(self.request, teamprofile)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommonBoardTagAPI(GenericAPIView):
    serializer_class = CommonBoardTagSerializer

    def get_object(self, commonpost_id):
        return get_object_or_404(Tag, post=commonpost_id)

    def get(self, request, commonpost_id):
        """
            자유/질문 게시글 태그 (GET)

            ---
                - commonpost : 자유/질문 게시글 번호(board id)
                - name : 태그명
        """
        post = self.get_object(commonpost_id)
        serializer = ProfileTagSerializer(post)
        return Response(serializer.data)

    def post(self, request, commonpost_id):
        """
            자유/질문 게시글 태그 (POST)

            ---
                - commonpost : 자유/질문 게시글 번호(board id)
                - name : 태그명
        """
        post = self.get_object(commonpost_id)
        serializer = ProfileTagSerializer(post, data=request.data)
        self.check_object_permissions(self.request, post)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecruitBoardTagAPI(GenericAPIView):
    serializer_class = RecruitBoardTagSerializer

    def get_object(self, recruitpost_id):
        return get_object_or_404(Tag, recruitpost=recruitpost_id)

    def get(self, request, recruitpost_id):
        """
            모집 게시글 태그 (GET)

            ---
                - recruitpost : 모집 게시글 번호(board id)
                - name : 태그명
        """
        recruitpost = self.get_object(recruitpost_id)
        serializer = ProfileTagSerializer(recruitpost)
        return Response(serializer.data)

    def post(self, request, recruitpost_id):
        """
            모집 게시글 태그 (POST)

            ---
                - recruitpost : 모집 게시글 번호(board id)
                - name : 태그명
        """
        recruitpost = self.get_object(recruitpost_id)
        serializer = ProfileTagSerializer(recruitpost, data=request.data)
        self.check_object_permissions(self.request, recruitpost)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

