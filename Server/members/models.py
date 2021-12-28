from django.db import models

# Create your models here.
class Member(models.Model):
    LEVEL_CHOICES = (
        ('팀장','팀장'),
        ('팀원','팀원'),
    )
    member = models.CharField(max_length=4)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.member
    class Meta:
        ordering = ['create_at']

class WaitingForMember(models.Model):
    waitmember = models.CharField(max_length=4)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.waitmember
    class Meta:
        ordering = ['-create_at']
