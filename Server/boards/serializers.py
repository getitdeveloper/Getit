from comments.models import Comment
from django.db.models import fields
from django.db.models.base import Model
from comments.serializers import CommentSerializer
from likes.models import Like
from profiles.models import Profile
from rest_framework import serializers

from profiles.serializers import ProfileSerializer, TagSerializer, TeamProfileSerializer
from .models import RecruitmentBoard, CommonBoard
from accounts.models import User
from rest_framework.serializers import ModelSerializer

# 좋아요
class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
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

class CommonBoardListSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    likes = serializers.IntegerField(
        source='likes.count',
        read_only=True
    )
    comments = serializers.IntegerField(
        source='comments.count',
        read_only=True
    )
    class Meta:
        model = CommonBoard
        fields = ('id','title', 'category', 'worker', 'content', 'image', 'create_at', 'user', 'stack', 'likes', 'comments',)

    def to_representation(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        return super().to_representation(instance)   

class CommonBoardDetailSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    likes = serializers.IntegerField(
        source='likes.count',
        read_only=True
    )
    comments = CommentProfileSerializer(read_only=True, many=True)
    class Meta:
        model = CommonBoard
        fields = ('id','title', 'category' ,'content', 'image', 'create_at', 'user', 'stack', 'likes', 'comments',)

    def to_representatione(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        # self.fields['comments'] = CommentProfileSerializer(read_only=True, many=True)
        return super().to_representation(instance) 

class RecruitmentBoardSerializer(ModelSerializer):

    class Meta:
        model = RecruitmentBoard
        fields = ('id','user', 'study', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status',)
    
    def to_representation(self, instance):
        self.fields['study'] = TeamProfileSerializer(read_only=True)
        return super().to_representation(instance)

    