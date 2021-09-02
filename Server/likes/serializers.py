from .models import Like
from rest_framework.serializers import ModelSerializer

class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ('commonpost', 'user',)