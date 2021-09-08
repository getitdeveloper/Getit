from rest_framework import serializers

from profiles.serializers import TagSerializer, TeamProfileSerializer
from .models import RecruitmentBoard, CommonBoard
from rest_framework.serializers import ModelSerializer


class CommonBoardSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    class Meta:
        model = CommonBoard
        fields = ('id','title', 'category' ,'content', 'image', 'create_at', 'user', 'stack',)

class CommonBoardPostSerializer(serializers.ModelSerializer):
    stack = TagSerializer(read_only=True, many=True)
    class Meta:
        model = CommonBoard
        fields = ('title', 'category', 'content', 'image', 'create_at', 'user', 'stack',)


class RecruitmentBoardSerializer(ModelSerializer):
    class Meta:
        model = RecruitmentBoard
        fields = ('id', 'user', 'study', 'developer', 'designer', 'pm', 'content', 'start_date', 'end_date', 'status',)

    def to_representation(self, instance):
        self.fields['study'] = TeamProfileSerializer(read_only=True)
        return super().to_representation(instance)