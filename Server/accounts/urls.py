from django.urls import path
from .views import HelloWorldView, GoogleLogin

urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name="google_login"),
]