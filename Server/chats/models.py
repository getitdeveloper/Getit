from django.db import models

class ChatRoom(models.Model):
    member = models.ManyToManyField('accounts.User', through='ChatMember', through_fields=('chatroom', 'me'))

class Message(models.Model):
    chat_room = models.ForeignKey('chats.ChatRoom', on_delete=models.CASCADE, related_name='chatroom')
    sender = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='sender')
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)

class ChatMember(models.Model):
    chatroom = models.ForeignKey('chats.ChatRoom', on_delete=models.CASCADE)
    me = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='me')
    oppnent = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='you')