from boards.models import CommonBoard
from accounts.models import User
from django.db import models

# Create your models here.
class Like(models.Model):
    commonpost = models.ForeignKey('boards.CommonBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)