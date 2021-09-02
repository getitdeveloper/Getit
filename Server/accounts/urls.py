from django.urls import path
from .views import GoogleLogin, github_callback, GithubLogin, KakaoLogin, kakao_callback, \
    google_callback, duplicate_check

urlpatterns = [
    path('login/google/', google_callback.as_view(), name="google_login"),
    path('login/github/', github_callback.as_view(), name="github_callback"),
    path('login/kakao/', kakao_callback.as_view(), name="kakao_callback"),
    path('token_accept/github/', GithubLogin.as_view(), name='github_login_todjango'),
    path('token_accept/kakao/', KakaoLogin.as_view(), name='kakao_login_todjango'),
    path('token_accept/google/', GoogleLogin.as_view(), name='kakao_login_todjango'),
    path('duplicate_check/', duplicate_check, name='duplicate_check'),
]