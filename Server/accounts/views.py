import json
from json import JSONDecodeError

import requests
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.apple.views import AppleOAuth2Adapter
from allauth.socialaccount.providers.naver.views import NaverOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status, permissions
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.kakao.views import KakaoOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

from accounts.models import User
from accounts.serializers import GoogleCallbackSerializer, RegisterSerializer, GithubCallbackSerializer, \
    KakaoCallbackSerializer
from profiles.models import Profile


@method_decorator(csrf_exempt, name='dispatch')
class google_callback(APIView):

    def post(self, request):
        """
            구글 로그인(POST)

            ---
            "accsess_token" : "abc.def.ghi"
        """
        accessToken = json.loads(request.body)
        access_token = accessToken['access_token']
        """
        Email Request
        """
        email_req = requests.get(f"https://www.googleapis.com/oauth2/v1/tokeninfo?access_token={access_token}")
        email_req_status = email_req.status_code
        if email_req_status != 200:
            return JsonResponse({'err_msg': 'failed to get email'}, status=status.HTTP_400_BAD_REQUEST)
        email_req_json = email_req.json()
        email = email_req_json.get('email')
        """
        Signup or Signin Request
        """
        try:
            user = User.objects.get(email=email)
            if user is None:
                raise Exception
            # 기존에 Google로 가입된 유저
            data = {'access_token': access_token}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/google/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            profile = Profile.objects.get(user=upk)
            nickname = profile.nickname
            if nickname is None:
                raise Exception
            access_token = accept_json['access_token']

            accept_json.pop('user', None)
            
            res = JsonResponse({
                'message': 'login',
                'access_token': access_token,'nickname':nickname})
            res.set_cookie(key='Authorization', value=access_token, httponly=True,
                           domain='getittest.shop', samesite=None)
            return res
        except:
            data = {'access_token': access_token}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/google/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            access_token = accept_json['access_token']

            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'register',
                'access_token': access_token,
            })
            res.set_cookie(key='Authorization', value=access_token, httponly=True,
                           domain='getittest.shop', samesite=None)
            return res

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client

@method_decorator(csrf_exempt, name='dispatch')
class github_callback(APIView):

    def post(self, request):
        """
            깃허브 로그인(POST)

            ---
            requestData = {
                "client_id" : "123213123123",
                "client_secret": "123123123",
                "code": "123123123"
            }
        """
        requestData = json.loads(request.body)
        client_id = requestData['client_id']
        client_secret = requestData['client_secret']
        code = requestData['code']
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
                            headers={"Authorization":f"Bearer {access_token}"})
        user_json = user_req.json()

        error = user_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)

        user_id = user_json.get("id")

        """
        Signup or Signin Request
        """
        try:
            user = SocialAccount.objects.get(uid=user_id)
            if user is None:
                raise Exception
            # 기존에 github로 가입된 유저
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/github/", data=data)
            accept_status = accept.status_code

            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            profile = Profile.objects.get(user=upk)
            nickname = profile.nickname
            if nickname is None:
                raise Exception
            access_token = accept_json['access_token']
            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'login','access_token': access_token,'nickname':nickname})
            res.set_cookie(key='Authorization', value=access_token, httponly=True,
                           domain='getittest.shop', samesite=None)
            return res
        except:
            # 기존에 가입된 유저가 없으면 새로 가입
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/github/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            # user의 pk, email, first name, last name과 Access Token, Refresh token 가져옴
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            access_token = accept_json['access_token']
            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'register','access_token': access_token})
            res.set_cookie(key='Authorization', value=access_token, httponly=True,
                           domain='getittest.shop', samesite=None)
            return res

class GithubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client

class GithubLogin(SocialLoginView):
    adapter_class = AppleOAuth2Adapter
    client_class = OAuth2Client

@method_decorator(csrf_exempt, name='dispatch')
class kakao_callback(APIView):

    def post(self, request):
        """
            카카오 로그인(POST)

            ---
            requestData{
                "code" : "123213123123",
                "API_KEY": "123123123",
                "REDIRECT_URI": "test.com"
            }
        """
        requestData = json.loads(request.body)
        code = requestData['code']
        API_KEY = requestData['API_KEY']
        REDIRECT_URI = requestData['REDIRECT_URI']

        """
        Access Token Request
        """
        token_req = requests.get(f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={API_KEY}&redirect_uri={REDIRECT_URI}&code={code}", headers={'Accept': 'application/json'})
        token_req_json = token_req.json()

        error = token_req_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        access_token = token_req_json.get('access_token')
        """
        Email Request
        """
        user_req = requests.get(f"https://kapi.kakao.com/v2/user/me", headers={"Authorization": f"Bearer {access_token}"})
        user_json = user_req.json()
        error = user_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        user_id = user_json.get("id")
        """
        Signup or Signin Request
        """
        try:
            user = SocialAccount.objects.get(uid=user_id)
            if user is None:
                raise Exception
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/kakao/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            profile = Profile.objects.get(user=upk)
            nickname = profile.nickname
            if nickname is None:
                raise Exception
            access_token = accept_json['access_token']
            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'login','access_token': access_token,'nickname':nickname})
            res.set_cookie(key='Authorization', value=access_token, httponly=True,
                           domain='getittest.shop', samesite=None)
            return res
        except:
            # 기존에 가입된 유저가 없으면 새로 가입
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/kakao/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            access_token = accept_json['access_token']

            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'register','access_token': access_token})
            res.set_cookie(key='Authorization', value=access_token, httponly=True,
                           domain='getittest.shop', samesite=None)
            return res

class KakaoLogin(SocialLoginView):
    adapter_class = KakaoOAuth2Adapter
    client_class = OAuth2Client

@method_decorator(csrf_exempt, name='dispatch')
def duplicate_check(request):
    request = json.loads(request.body)
    nickname = request["nickname"]
    try:
        _nickname = Profile.objects.get(nickname=nickname)
    except:
        _nickname = None
    if _nickname is None:
        duplicate = "pass"
    else:
        duplicate = "fail"
    context = {'duplicate': duplicate}
    return JsonResponse(context)

def logout(request):
    res = JsonResponse({})
    res.delete_cookie('Authorization', domain='getittest.shop', samesite=None)
    return res