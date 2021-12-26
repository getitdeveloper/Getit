from rest_framework import serializers

from members.models import Member
from profiles.models import Profile

from members.models import WaitingForMember


class MemberSerializer(serializers.ModelSerializer):
    nickname = serializers.SerializerMethodField()
    class Meta:
        model = Member
        fields = ('member','nickname')
    def get_nickname(self,obj):
        profile = Profile.objects.get(id=obj.member)
        nickname = profile.nickname
        return nickname

class WaitingMemberSerializer(serializers.ModelSerializer):
    nickname = serializers.SerializerMethodField()
    class Meta:
        model = WaitingForMember
        fields = ('waitmember','nickname')
    def get_nickname(self,obj):
        profile = Profile.objects.get(id=obj.waitmember)
        nickname = profile.nickname
        return nickname