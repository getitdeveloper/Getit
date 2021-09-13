from .models import Like
from rest_framework.serializers import ModelSerializer

from boards.models import CommonBoard, RecruitmentBoard

class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ('commonpost', 'user',)