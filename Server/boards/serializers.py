from comments.models import Comment
from django.db.models import fields
from django.db.models.base import Model
from comments.serializers import CommentSerializer
from likes.models import CommonBoardLike
from profiles.models import Profile
from rest_framework import serializers

from profiles.serializers import ProfileSerializer, TagSerializer, TeamProfileSerializer
from .models import RecruitmentBoard, CommonBoard
from accounts.models import User
from rest_framework.serializers import ModelSerializer


# 좋아요
class LikeSerializer(ModelSerializer):
    class Meta:
        model = CommonBoardLike
        fields = ('commonpost', 'user',)


# 작성자 프로필(닉네임, 이미지)
class SpecificAuthorProfile(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('nickname', 'image',)


# 작성자 정보(id, 프로필) -> 작성자 프로필 사용
class UserProfileSerializer(ModelSerializer):
    profile = SpecificAuthorProfile(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'profile',)


# 댓글 작성자 프로필(id, 프로필) -> 작성자 프로필 사용
class UserCommentProfileSerializer(ModelSerializer):
    profile = SpecificAuthorProfile(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'profile',)


# # 댓글 작성자 정보 -> 댓글 작성자 프로필 사용
class CommentProfileSerializer(ModelSerializer):
    user = UserCommentProfileSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('user', 'content')


class CommonBoardSerializer(serializers.ModelSerializer):
    likes = serializers.IntegerField(
        source='commonlikes.count',
        read_only=True
    )
    comments = serializers.IntegerField(
        source='commoncomments.count',
        read_only=True
    )

    class Meta:
        model = CommonBoard
        fields = ('id', 'title', 'category', 'worker', 'content', 'image', 'create_at', 'user', 'likes', 'comments',)

    def to_representation(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        return super().to_representation(instance)


class RecruitmentBoardSerializer(ModelSerializer):
    likes = serializers.IntegerField(
        source='recruitlikes.count',
        read_only=True
    )
    comments = serializers.IntegerField(
        source='recruitcomments.count',
        read_only=True
    )

    class Meta:
        model = RecruitmentBoard
        fields = (
        'id', 'user', 'title', 'study', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status',
        'create_at', 'comments', 'likes',)

    def to_representation(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        self.fields['study'] = TeamProfileSerializer(read_only=True)
        return super().to_representation(instance)


class RecruitmentBoardSerializer(ModelSerializer):

    class Meta:
        model = RecruitmentBoard
        fields = ('id','user', 'title', 'study', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status',)
    
    def to_representation(self, instance):
        self.fields['study'] = TeamProfileSerializer(read_only=True)
        return super().to_representation(instance)

    