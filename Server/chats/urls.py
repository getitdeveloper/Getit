from .views import FirstMessageView, MessageDetailView, MessageListView
from django.urls import path

urlpatterns = [
    path('messagelist/<int:sender>/', MessageListView.as_view(), name='message_list'),
    path('message/<int:chat_room>/', MessageDetailView.as_view(), name='message_detail'),
    path('message/<int:sender>/<int:receiver>/', FirstMessageView.as_view(), name='first_message'),
]