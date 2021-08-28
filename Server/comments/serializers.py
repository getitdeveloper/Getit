from .models import Comment
from rest_framework.serializers import ModelSerializer

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ('user', 'question', 'content', 'likes', 'create_at')