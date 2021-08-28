from .models import CommonBoard, RecruitmentBoard
from rest_framework.serializers import ModelSerializer

class CommonBoardPostSerializer(ModelSerializer):
    class Meta:
        model = CommonBoard
        fields = ('title', 'content', 'category', 'image', 'likes', 'create_at', 'user', 'tags',)

class RecruitmentBoardSerializer(ModelSerializer):
    class Meta:
        model = RecruitmentBoard
        fields = ('user', 'study_name', 'stack', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status',)