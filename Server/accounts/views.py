import json
from json import JSONDecodeError

import requests
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.kakao.views import KakaoOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

from accounts.models import User


class HelloWorldView(APIView):
    def get(self, request):
        user = request.user
        return Response(data={"message":"hello world", "user": user.username, "title": user.title}, status=status.HTTP_200_OK)

class GoogleLogin(SocialLoginView):
    permission_classes = (permissions.AllowAny,)
    adapter_class = GoogleOAuth2Adapter

@method_decorator(csrf_exempt, name='dispatch')
class github_callback(View):
    def post(self, request):
        requestData = json.loads(request.body)
        client_id = requestData['client_id']
        client_secret = requestData['client_secret']
        code = requestData['code']
        print(client_id)
        print(client_secret)
        print(code)
        """
        Access Token Request
        """
        token_req = requests.get(
            f"https://github.com/login/oauth/access_token?client_id={client_id}&client_secret={client_secret}&code={code}&accept=&json&redirect_uri=http://localhost:3000/callback/github&response_type=code", headers={'Accept': 'application/json'})
        token_req_json = token_req.json()
        error = token_req_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        access_token = token_req_json.get('access_token')
        """
        Email Request
        """
        user_req = requests.get(f"https://api.github.com/user",
                            headers={"Authorization": f"Bearer {access_token}"})
        user_json = user_req.json()
        error = user_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        # print(user_json)
        email = user_json.get("email")
        """
        Signup or Signin Request
        """
        data = {'access_token': access_token, 'code': code}
        accept = requests.post(
            f"http://127.0.0.1:8000/accounts/github/login/finish/", data=data)
        accept_status = accept.status_code
        if accept_status != 200:
            return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
        accept_json = accept.json()
        print(accept_json)
        # accept_json.pop('user', None)
        return JsonResponse(accept_json)

class GithubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client

@method_decorator(csrf_exempt, name='dispatch')
class kakao_callback(View):
    def post(self, request):
        requestData = json.loads(request.body)
        code = requestData['code']
        print(code)
        """
        Access Token Request
        """
        token_req = requests.get(
            f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=3affab566e26b3ff9d09506f3876dd18&redirect_uri=http://127.0.0.1:3000/callback/kakao/&code={code}", headers={'Accept': 'application/json'})
        token_req_json = token_req.json()
        error = token_req_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        access_token = token_req_json.get('access_token')
        """
        Email Request
        """
        user_req = requests.get(f"https://kapi.kakao.com/v2/user/me",
                            headers={"Authorization": f"Bearer {access_token}"})
        user_json = user_req.json()
        error = user_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        # print(user_json)
        email = user_json.get("email")
        """
        Signup or Signin Request
        """
        data = {'access_token': access_token, 'code': code}
        accept = requests.post(
            f"http://127.0.0.1:8000/accounts/kakao/login/finish/", data=data)
        accept_status = accept.status_code
        if accept_status != 200:
            return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
        accept_json = accept.json()
        print(accept_json)
        # accept_json.pop('user', None)
        return JsonResponse(accept_json)

class KakaoLogin(SocialLoginView):
    adapter_class = KakaoOAuth2Adapter
    client_class = OAuth2Client