from boards.models import CommonBoard
from accounts.models import User
from django.db import models

# Create your models here.
class CommonBoardLike(models.Model):
    commonpost = models.ForeignKey('boards.CommonBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='commonlikes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta:
        ordering = ['-commonpost']

class RecruitBoardLike(models.Model):
    recruitpost = models.ForeignKey('boards.RecruitmentBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='recruitlikes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-recruitpost']