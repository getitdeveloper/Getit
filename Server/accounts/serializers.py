from rest_framework import serializers

class GoogleCallbackSerializer(serializers.Serializer):
    access_token = serializers.CharField(max_length=200)

class GithubCallbackSerializer(serializers.Serializer):
    client_id = serializers.CharField(max_length=200)
    client_secret = serializers.CharField(max_length=200)
    code = serializers.CharField(max_length=200)


class KakaoCallbackSerializer(serializers.Serializer):
    API_KEY = serializers.CharField(max_length=200)
    REDIRECT_URI = serializers.CharField(max_length=200)
    code = serializers.CharField(max_length=200)

class RegisterSerializer(serializers.Serializer):
    access_token = serializers.CharField(max_length=200)
    refresh_token = serializers.CharField(max_length=200)
    message = serializers.CharField(max_length=200)
    user_pk = serializers.CharField(max_length=100)