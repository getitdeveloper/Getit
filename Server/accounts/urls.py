from django.urls import path
from .views import HelloWorldView, GoogleLogin, github_callback, GithubLogin, KakaoLogin, kakao_callback, \
    google_callback

urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('dj-rest-auth/google/', google_callback.as_view(), name="google_login"),
    path('dj-rest-auth/github/', github_callback.as_view(), name="github_callback"),
    path('dj-rest-auth/kakao/', kakao_callback.as_view(), name="kakao_callback"),
    path('github/login/finish/', GithubLogin.as_view(), name='github_login_todjango'),
    path('kakao/login/finish/', KakaoLogin.as_view(), name='kakao_login_todjango'),
    path('google/login/finish/', GoogleLogin.as_view(), name='kakao_login_todjango'),
]