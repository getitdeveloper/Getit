from rest_framework import serializers

from profiles.models import Profile, Group


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'user_pk', 'nickname', 'job', 'developer_level', 'designer_and_pm_level', 'image', 'mymail', 'myinfo', 'mygit', 'stacks', 'portfolio',)

class GroupCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'