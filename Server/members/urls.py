from django.urls import path
from .views import MemberAddView, MemberWaitingView

urlpatterns = [
    path('member/', MemberAddView.as_view(), name='member_add'),
    path('waitingmember/', MemberWaitingView.as_view()),
]