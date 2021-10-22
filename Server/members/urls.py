from django.urls import path
from .views import MemberAddView

urlpatterns = [
    path('member/', MemberAddView.as_view(), name='member_add'),
]