"""apis URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from apis import settings
from profiles.views import status_check

schema_view_v1 = get_schema_view(
    openapi.Info(
        title="GETIT API",
        default_version='v1',
        description=
        """
        GETIT API 문서 페이지입니다.
        """,
    ),
    validators=['flex'],
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('api/auth/', status_check),
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),
    path('api/', include('allauth.urls')),
    path('api/', include('profiles.urls')),
    path('api/', include('boards.urls')),
    path('api/', include('portfolios.urls')),
    path('api/', include('comments.urls')),
    path('api/', include('likes.urls')),
    path('api/', include('chats.urls')),
    path('api/', include('members.urls')),
    url(r'^swagger(?P<format>\.json|\.yaml)/v1$', schema_view_v1.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/v1/$', schema_view_v1.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/v1/$', schema_view_v1.with_ui('redoc', cache_timeout=0), name='schema-redoc-v1'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)