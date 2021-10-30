from rest_framework import serializers

from members.models import Member
from profiles.models import Profile


class MemberSerializer(serializers.ModelSerializer):
    nickname = serializers.SerializerMethodField()
    class Meta:
        model = Member
        fields = ('member','nickname')
    def get_nickname(self,obj):
        profile = Profile.objects.get(id=obj.member)
        nickname = profile.nickname
        return nickname