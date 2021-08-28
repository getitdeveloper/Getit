from boards.models import CommonBoard
from accounts.models import User
from django.db import models

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(CommonBoard, on_delete=models.CASCADE)
    content = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True)