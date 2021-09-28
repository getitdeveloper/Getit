from enum import auto
from django.db import models

# Create your models here.
class Message(models.Model):
    sender = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='receiver')
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)