from boards.serializers import CommonBoardSerializer, RecruitmentBoardSerializer
from .models import CommonBoardLike, RecruitBoardLike
from rest_framework.serializers import ModelSerializer

from boards.models import CommonBoard

class CommonBoardLikeSerializer(ModelSerializer):
    class Meta:
        model = CommonBoardLike
        fields = ('commonpost', 'user',)

class CommonBoardLikePostSerializer(ModelSerializer):
    class Meta:
        model = CommonBoardLike
        fields = ('commonpost',)

    def to_representation(self, instance):
        self.fields['commonpost'] = CommonBoardSerializer(read_only=True)
        return super().to_representation(instance)

class RecruitBoardLikeSerializer(ModelSerializer):
    class Meta:
        model = RecruitBoardLike
        fields = ('recruitpost', 'user',)

class RecruitBoardLikePostSerializer(ModelSerializer):
    class Meta:
        model = RecruitBoardLike
        fields = ('recruitpost',)

    def to_representation(self, instance):
        self.fields['recruitpost'] = RecruitmentBoardSerializer(read_only=True)
        return super().to_representation(instance)