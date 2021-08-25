from .serializers import GithubCallbackSerializer, GoogleCallbackSerializer, KakaoCallbackSerializer, RegisterSerializer
import json
from json import JSONDecodeError
from drf_yasg.utils import no_body, swagger_auto_schema
from drf_yasg import openapi

import requests
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers, status, permissions
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.kakao.views import KakaoOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

from accounts.models import User

@method_decorator(csrf_exempt, name='dispatch')
class google_callback(APIView):

    @swagger_auto_schema(
        operation_description="구글 소셜 로그인", 
        request_body=GoogleCallbackSerializer,
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="Login Response",
                schema=RegisterSerializer
            )
        }
    )
    def post(self, request):
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
            # 기존에 Google로 가입된 유저
            data = {'access_token': access_token}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/google/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
            accept_json = accept.json()
            print(accept_json)
            # accept_json.pop('user', None)
            res_data = {
                'message': 'login',
                'token': accept_json,
            }
            return JsonResponse(res_data)
        except User.DoesNotExist:
            data = {'access_token': access_token}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/google/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            # accept_json.pop('user', None)
            res_data = {
                'message': 'register',
                'token': accept_json,
            }
            return JsonResponse(res_data)

@swagger_auto_schema(auto_schema=None)
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client

@method_decorator(csrf_exempt, name='dispatch')
class github_callback(APIView):

    @swagger_auto_schema(
        operation_description="깃허브 소셜 로그인", 
        request_body=GithubCallbackSerializer,
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="Login Response",
                schema=RegisterSerializer
            )
        }
    )
    def post(self, request):
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
                            headers={"Authorization": f"Bearer {access_token}"})
        user_json = user_req.json()
        error = user_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        print(user_json)
        username_initial = user_json.get("name")
        username_split = username_initial.split(' ')
        username = username_split[0].lower()
        print(username)
        """
        Signup or Signin Request
        """
        try:
            user = User.objects.get(first_name=username)

            # 기존에 github로 가입된 유저
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/github/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
            accept_json = accept.json()
            # accept_json.pop('user', None)
            res_data = {
                'message': 'login',
                'token': accept_json
            }
            return JsonResponse(res_data)
        except User.DoesNotExist:
            # 기존에 가입된 유저가 없으면 새로 가입
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/github/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            # user의 pk, email, first name, last name과 Access Token, Refresh token 가져옴
            accept_json = accept.json()
            # accept_json.pop('user', None)
            res_data = {
                'message': 'register',
                'token': accept_json
            }
            return JsonResponse(res_data)

class GithubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client

@method_decorator(csrf_exempt, name='dispatch')
class kakao_callback(APIView):

    @swagger_auto_schema(
        operation_description="카카오 소셜 로그인", 
        request_body=KakaoCallbackSerializer,
        responses={
            status.HTTP_201_CREATED: openapi.Response(
                description="Login Response",
                schema=RegisterSerializer
            )
        }
    )
    def post(self, request):
        requestData = json.loads(request.body)
        code = requestData['code']
        API_KEY = requestData['API_KEY']
        REDIRECT_URI = requestData['REDIRECT_URI']
        print(code)
        print(REDIRECT_URI)
        """
        Access Token Request
        """
        token_req = requests.get(f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={API_KEY}&redirect_uri={REDIRECT_URI}&code={code}", headers={'Accept': 'application/json'})
        token_req_json = token_req.json()
        print(token_req_json)
        error = token_req_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        access_token = token_req_json.get('access_token')
        print(access_token)
        """
        Email Request
        """
        user_req = requests.get(f"https://kapi.kakao.com/v2/user/me", headers={"Authorization": f"bearer {access_token}"})
        user_json = user_req.json()
        print(user_json)
        error = user_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        kakao_id = user_json.get("id")
        print(kakao_id)
        """
        Signup or Signin Request
        """
        try:
            email = user_json['kakao_account'].get('email')
            user = User.objects.get(email=email)
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/kakao/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signin'}, status=accept_status)
            accept_json = accept.json()
            print(accept_json)
            # accept_json.pop('user', None)
            res_data = {
                'message': 'login',
                'token' : accept_json
            }
            return JsonResponse(res_data)
        except User.DoesNotExist:
            # 기존에 가입된 유저가 없으면 새로 가입
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/kakao/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            print(accept_json)
            # accept_json.pop('user', None)
            res_data = {
                'message': 'register',
                'token' : accept_json
            }
            return JsonResponse(res_data)

class KakaoLogin(SocialLoginView):
    adapter_class = KakaoOAuth2Adapter
    client_class = OAuth2Client