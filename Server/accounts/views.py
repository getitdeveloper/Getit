from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class HelloWorldView(APIView):
    def get(self, request):
        user = request.user
        return Response(data={"message":"hello world", "user": user.username, "title": user.title}, status=status.HTTP_200_OK)

class GoogleLogin(SocialLoginView):
    permission_classes = (permissions.AllowAny,)
    adapter_class = GoogleOAuth2Adapter

class GithubLogin(SocialLoginView):
    permission_classes = (permissions.AllowAny,)
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'http://localhost:8000/accounts/github/login/callback/'