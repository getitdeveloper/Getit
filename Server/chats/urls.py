from .views import MessageDetailView, MessageListView
from django.urls import path

urlpatterns = [
    path('message/<int:sender>/', MessageListView.as_view(), name='message_list'),
    path('message/<int:sender>/<int:receiver>/', MessageDetailView.as_view(), name='message_detail'),
]