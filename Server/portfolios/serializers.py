from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Portfolio


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ('id','user', 'title', 'contents', 'images',)