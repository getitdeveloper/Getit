from django.db.models import fields
from django.db.models.base import Model
from rest_framework.fields import CurrentUserDefault, SerializerMethodField
from likes.models import CommonBoardLike, RecruitBoardLike
from profiles.models import Profile
from rest_framework import serializers

from profiles.serializers import ProfileSerializer, TagSerializer, TeamProfileSerializer
from .models import RecruitmentBoard, CommonBoard, Worker
from accounts.models import User
from rest_framework.serializers import ModelSerializer



# 좋아요
from members.models import Member


class WorkerSerializer(serializers.ModelSerializer):

    def to_representation(self, value):
        return value.worker

    class Meta:
        model = Worker
        fields = ('worker',)

class CommonLikeSerializer(ModelSerializer):
    class Meta:
        model = CommonBoardLike
        fields = ('commonpost', 'user',)

class RecruitLikeSerializer(ModelSerializer):
    class Meta:
        model = RecruitBoardLike
        fields = ('recruitpost', 'user',)


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

class CommonBoardSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    likes = serializers.IntegerField(
        source='commonlikes.count',
        read_only=True
    )
    comments = serializers.IntegerField(
        source='commoncomments.count',
        read_only=True
    )
    # like_user = CommonLikeSerializer(read_only=True, many=True)
    is_like = SerializerMethodField()
    worker = WorkerSerializer(read_only=True, many=True)
    class Meta:
        model = CommonBoard
        fields = ('id', 'title', 'category', 'content', 'image', 'create_at', 'user', 'likes', 'comments', 'is_like', 'stack','worker')

    def to_representation(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        return super().to_representation(instance)

    def get_is_like(self, obj):
        user = self.context.get('request').user.id
        like = CommonBoardLike.objects.filter(commonpost=obj.id, user=user)
        if like.exists():
            return True
        else:
            return False

class MemberBoardSerializer(serializers.ModelSerializer):
    nickname = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = ('member','nickname')
        
    def get_nickname(self,obj):
        profile = Profile.objects.get(id=obj.study.member)
        nickname = profile.nickname
        return nickname

class RecruitmentBoardSerializer(ModelSerializer):
    likes = serializers.IntegerField(
        source='recruitlikes.count',
        read_only=True
    )

    comments = serializers.IntegerField(
        source='recruitcomments.count',
        read_only=True
    )
    stack = TagSerializer(read_only=True, many=True)
    members = MemberBoardSerializer(read_only=True, many=True)
    is_like = SerializerMethodField()
    class Meta:
        model = RecruitmentBoard
        fields = (
        'id', 'title', 'developer', 'designer', 'pm', 'content','stack', 'start_date', 'end_date', 'status',
        'create_at','user','image','study', 'comments', 'likes', 'is_like','members')

    def to_representation(self, instance):
        self.fields['user'] = UserProfileSerializer(read_only=True)
        self.fields['study'] = TeamProfileSerializer(read_only=True)
        return super().to_representation(instance)

    def get_is_like(self, obj):
        user = self.context.get('request').user.id
        like = RecruitBoardLike.objects.filter(recruitpost=obj.id, user=user)
        if like.exists():
            return True
        else:
            return False