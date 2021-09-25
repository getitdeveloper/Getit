from .models import CommonComment, RecruitComment
from rest_framework.serializers import ModelSerializer

from profiles.models import Profile

from accounts.models import User

from boards.models import CommonBoard

from boards.models import RecruitmentBoard


class SpecificAuthorProfile(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('nickname', 'image',)

class UserCommentProfileSerializer(ModelSerializer):
    profile = SpecificAuthorProfile(read_only=True)
    class Meta:
        model = User
        fields = ('id', 'profile',)

class BoardPlusCommentSerializer(ModelSerializer):
    class Meta:
        model = CommonBoard
        fields = ('title','category','worker',)

class ReBoardPlusCommentSerializer(ModelSerializer):
    class Meta:
        model = RecruitmentBoard
        fields = ('title','category','worker',)

class CommonCommentSerializer(ModelSerializer):
    profile = UserCommentProfileSerializer(read_only=True)
    board = BoardPlusCommentSerializer(read_only=True)
    class Meta:
        model = CommonComment
        fields = ('id', 'user', 'commonpost', 'content', 'create_at', 'profile', 'board',)

    def to_representation(self, instance):
        self.fields['user'] = UserCommentProfileSerializer(read_only=True)
        return super().to_representation(instance)

class RecruitCommentSerializer(ModelSerializer):
    profile = UserCommentProfileSerializer(read_only=True)
    board = ReBoardPlusCommentSerializer(read_only=True)
    class Meta:
        model = RecruitComment
        fields = ('id', 'user', 'recruitmentpost', 'content', 'create_at', 'profile', 'board',)

    def to_representation(self, instance):
        self.fields['user'] = UserCommentProfileSerializer(read_only=True)
        return super().to_representation(instance)