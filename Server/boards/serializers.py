from comments.serializers import CommentSerializer
from likes.models import Like
from rest_framework import serializers

from profiles.models import Profile
from profiles.serializers import ProfileSerializer, TagSerializer, TeamProfileSerializer
from .models import RecruitmentBoard, CommonBoard
from accounts.models import User
from rest_framework.serializers import ModelSerializer


class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ('commonpost', 'user',)


class ProfileGetSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields=('nickname','image')

class UserProfileSerializer(ModelSerializer):
    profile = ProfileGetSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'profile',)


class UserCommentProfileSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('profile',)


class CommentProfileSerializer(ModelSerializer):
    user = UserCommentProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('user',)


class CommonBoardListSerializer(serializers.ModelSerializer):
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
        fields = ('id', 'title', 'category', 'content', 'image', 'create_at', 'user', 'likes', 'comments','worker',)

    def to_representation(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        return super().to_representation(instance)


class CommonBoardDetailSerializer(serializers.ModelSerializer):

    likes = serializers.IntegerField(
        source='likes.count',
        read_only=True
    )
    comments = CommentProfileSerializer(read_only=True, many=True)

    class Meta:
        model = CommonBoard
        fields = ('id', 'title', 'category', 'content', 'image', 'create_at', 'user', 'likes', 'comments','worker',)

    def to_representatione(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        # self.fields['comments'] = CommentProfileSerializer(read_only=True, many=True)
        return super().to_representation(instance)


class RecruitmentBoardSerializer(ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    class Meta:
        model = RecruitmentBoard
        fields = ('user','title', 'study', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status','worker','stack',)

    def to_representation(self, instance):
        self.fields['study'] = TeamProfileSerializer(read_only=True)
        return super().to_representation(instance)
