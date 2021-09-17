from .models import CommonComment, RecruitComment
from rest_framework.serializers import ModelSerializer

from profiles.models import Profile

from accounts.models import User


class SpecificAuthorProfile(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('nickname', 'image',)

class UserCommentProfileSerializer(ModelSerializer):
    profile = SpecificAuthorProfile(read_only=True)
    class Meta:
        model = User
        fields = ('id', 'profile',)

class CommonCommentSerializer(ModelSerializer):
    profile = UserCommentProfileSerializer(read_only=True)
    class Meta:
        model = CommonComment
        fields = ('id', 'user', 'commonpost', 'content', 'create_at', 'profile')

    def to_representation(self, instance):
        self.fields['user'] = UserCommentProfileSerializer(read_only=True)
        return super().to_representation(instance)

class RecruitCommentSerializer(ModelSerializer):
    profile = UserCommentProfileSerializer(read_only=True)
    class Meta:
        model = RecruitComment
        fields = ('id', 'user', 'recruitmentpost', 'content', 'create_at', 'profile')

    def to_representation(self, instance):
        self.fields['user'] = UserCommentProfileSerializer(read_only=True)
        return super().to_representation(instance)