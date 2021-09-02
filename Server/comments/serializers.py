from .models import Comment
from rest_framework.serializers import ModelSerializer


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ('user','commonpost', 'recruitmentpost', 'content', 'create_at')