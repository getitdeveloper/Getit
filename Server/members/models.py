from django.db import models

# Create your models here.
class Member(models.Model):
    LEVEL_CHOICES = (
        ('팀장','팀장'),
        ('팀원','팀원'),
    )
    create_at = models.DateTimeField(auto_now_add=True)