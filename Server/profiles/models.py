from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.models import User
from tags.models import Tag


class Profile(models.Model):
    CHOICES_JOB = (
        ('개발자', '개발자'),
        ('디자이너', '디자이너'),
        ('기획자', '기획자'),
    )
    CHOICES_LEVEL = (
        ('코린이', '코린이'),
        ('코등학생', '코등학생'),
        ('코대생', '코대생'),
        ('코드닌자', '코드닌자'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_pk = models.IntegerField(null=True)
    nickname = models.CharField(max_length=50, null=False, unique=True)
    job = models.CharField(choices=CHOICES_JOB, max_length=10,null=True)
    level = models.CharField(choices=CHOICES_LEVEL, max_length=10, null=True)
    image = models.ImageField(upload_to='profile', null=True)
    mymail = models.EmailField(max_length=50, null=True)
    myinfo = models.TextField(null=True)
    mygit = models.CharField(max_length=100, null=True)
    stack = models.ForeignKey(Tag, on_delete=models.CASCADE, null=True)
    portfolio = models.TextField(null=True)

    def __str__(self):
        return self.nickname


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, user_pk=instance.id)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()