import json
from json import JSONDecodeError
import requests
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status, permissions
from rest_framework.views import APIView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.kakao.views import KakaoOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
import logging
from accounts.models import User
from profiles.models import Profile

logger = logging.getLogger(__name__)


@method_decorator(csrf_exempt, name='dispatch')
class google_callback(APIView):

    def post(self, request):
        """
            구글 로그인(POST)

            ---
            "accsess_token" : "abc.def.ghi"
        """
        print(request.body)
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
            data = {'access_token': access_token}
            accept = requests.post(
                f"https://api.getit.best/api/token_accept/google/", data=data)
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
                'message': 'login', 'access_token': access_token, 'nickname': nickname, 'user_pk': upk})
            res.set_cookie(key='getit', value=access_token, httponly=True,
                           domain='getit.best', samesite=None)
            return res
        except:
            data = {'access_token': access_token}
            accept = requests.post(
                f"https://api.getit.best/api/token_accept/google/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            access_token = accept_json['access_token']
            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'register', 'access_token': access_token, 'user_pk': upk})
            res.set_cookie(key='getit', value=access_token, httponly=True,
                           domain='getit.best', samesite=None)
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
            f"https://github.com/login/oauth/access_token?client_id={client_id}&client_secret={client_secret}&code={code}&accept=&json&redirect_uri=https://getit.best/callback/github&response_type=code",
            headers={'Accept': 'application/json'})
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
                f"https://api.getit.best/api/token_accept/github/", data=data)
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
                'message': 'login', 'access_token': access_token, 'nickname': nickname, 'user_pk': upk})
            res.set_cookie(key='getit', value=access_token, httponly=True,
                           domain='getit.best', samesite=None)
            return res
        except:
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"https://api.getit.best/api/token_accept/github/", data=data)
            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            upk = accept_json.get('user')
            upk = upk['pk']
            access_token = accept_json['access_token']
            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'register', 'access_token': access_token, 'user_pk': upk})
            res.set_cookie(key='getit', value=access_token, httponly=True,
                           domain='getit.best', samesite=None)
            return res


class GithubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client


@method_decorator(csrf_exempt, name='dispatch')
class kakao_callback(APIView):

    def post(self, request):
        """
            카카오 로그인(POST)

            ---
            {
                "code" : "123213123123",
                "API_KEY": "123123123",
                "REDIRECT_URI": "test.com"
            }
        """
        requestData = json.loads(request.body)
        code = requestData['code']
        API_KEY = requestData['API_KEY']
        REDIRECT_URI = requestData['REDIRECT_URI']
        logger.error(requestData)
        """
        Access Token Request
        """
        token_req = requests.get(
            f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={API_KEY}&redirect_uri={REDIRECT_URI}&code={code}",
            headers={'Accept': 'application/json'})
        token_req_json = token_req.json()
        error = token_req_json.get("error")
        if error is not None:
            raise JSONDecodeError(error)
        access_token = token_req_json.get('access_token')
        logger.error(access_token)
        """
        Email Request
        """
        user_req = requests.get(f"https://kapi.kakao.com/v2/user/me",
                                headers={"Authorization": f"Bearer {access_token}"})
        user_json = user_req.json()
        error = user_json.get("error")
        logger.error(user_json)
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
            logger.error(accept)

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
                'message': 'login', 'access_token': access_token, 'nickname': nickname, 'user_pk': upk})
            res.set_cookie(key='getit', value=access_token, httponly=True,
                           domain='getit.best', samesite=None)
            return res
        except:
            data = {'access_token': access_token, 'code': code}
            accept = requests.post(
                f"http://127.0.0.1:8000/api/token_accept/kakao/", data=data)

            accept_status = accept.status_code
            if accept_status != 200:
                return JsonResponse({'err_msg': 'failed to signup'}, status=accept_status)
            accept_json = accept.json()
            logger.error(accept_json)
            upk = accept_json.get('user')
            upk = upk['pk']
            access_token = accept_json['access_token']
            accept_json.pop('user', None)
            res = JsonResponse({
                'message': 'register', 'access_token': access_token, 'user_pk': upk})
            res.set_cookie(key='getit', value=access_token, httponly=True,
                           domain='getit.best', samesite=None)
            return res


@method_decorator(csrf_exempt, name='dispatch')
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
    res.delete_cookie('getit', domain='getit.best', samesite=None)
    return res


class DeleteUser(APIView):

    def post(self, request):
        """
                    회원탈퇴 (POST)

                    ---
                        body에는 아무것도 넣지 않은채로 쿠키에 토큰값만 있으면 됩니다.
                        성공시 sucess 반환
                        테스트용도로 만들어둔거에요
                """
        user_id = self.request.user.id
        user = User.objects.get(id=user_id)
        user.delete()
        res = {
            "message": "success"
        }
        return JsonResponse(res)
