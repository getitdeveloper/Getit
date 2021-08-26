from boards.models import CommonBoard
from rest_framework.serializers import ModelSerializer

class CommonBoardPostSerializer(ModelSerializer):
    class Meta:
        model = CommonBoard
        fields = ('title', 'content', 'category', 'image', 'likes', 'create_at', 'user', 'tags',)