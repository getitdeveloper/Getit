from .models import RecruitmentBoard, CommonBoard
from rest_framework.serializers import ModelSerializer

class CommonBoardSerializer(ModelSerializer):
    class Meta:
        model = CommonBoard
        fields = ('id','title', 'category' ,'content', 'image', 'create_at', 'user',)

class RecruitmentBoardSerializer(ModelSerializer):
    class Meta:
        model = RecruitmentBoard
        fields = ('id','user', 'study_name', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status',)