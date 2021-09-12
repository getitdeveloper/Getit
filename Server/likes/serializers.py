from .models import Like
from rest_framework.serializers import ModelSerializer

from boards.models import CommonBoard




class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ('commonpost', 'user',)