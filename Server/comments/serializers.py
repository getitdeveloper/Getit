from .models import Comment
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

class CommentSerializer(ModelSerializer):
    profile = UserCommentProfileSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ('id', 'user','commonpost', 'recruitmentpost', 'content', 'create_at', 'profile')

    def to_representation(self, instance):
        self.fields['user'] = UserCommentProfileSerializer(read_only=True)
        return super().to_representation(instance)
