from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Portfolio


class PortfolioSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Portfolio
        fields = ('id','user', 'title','link', 'contents', 'image',)

    def get_image(self, obj):
        request = self.context.get('request')
        image = obj.image.url
        return request.build_absolute_uri(image)