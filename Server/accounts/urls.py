from django.urls import path
from .views import HelloWorldView, GoogleLogin, github_callback, GithubLogin

urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name="google_login"),
    path('dj-rest-auth/github/', github_callback.as_view(), name="github_callback"),
    path('github/login/finish/', GithubLogin.as_view(), name='github_login_todjango'),
]