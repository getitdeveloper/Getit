from django.db import models

# Create your models here.
class Member(models.Model):
    LEVEL_CHOICES = (
        ('팀장','팀장'),
        ('팀원','팀원'),
    )
    level = models.CharField('members.Member', max_length=20,null=False, blank=False)
    create_at = models.DateTimeField(auto_now_add=True)