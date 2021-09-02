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
    DEVELOPER_CHOICES_LEVEL = (
        ('코린이', '코린이'),
        ('코등학생', '코등학생'),
        ('코대생', '코대생'),
        ('코드닌자', '코드닌자'),
    )
    DESIGNER_AND_PM_CHOICES_LEVEL = (
        ('하수', '하수'),
        ('초수', '초수'),
        ('중수', '중수'),
        ('고수', '고수'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    user_pk = models.IntegerField(unique=True)
    nickname = models.CharField(max_length=50, unique=True, null=True)
    job = models.CharField(choices=CHOICES_JOB, max_length=10, default='개발자')
    developer_level = models.CharField(choices=DEVELOPER_CHOICES_LEVEL, max_length=10, blank=True, default='코린이')
    designer_and_pm_level = models.CharField(choices=DESIGNER_AND_PM_CHOICES_LEVEL, max_length=10, blank=True, default='하수')
    image = models.ImageField(upload_to='profile', blank=True, null=True, default="../media/profile/Untitled.jpeg")
    email = models.EmailField(max_length=50, null=True)
    info = models.TextField(null=True)
    git = models.CharField(max_length=100, blank=True, null=True)
    stacks = models.ManyToManyField(Tag, blank=True)
    portfolio = models.ForeignKey('portfolios.Portfolio',on_delete=models.CASCADE,blank=True, null=True)

    # def __str__(self):
    #     return self.user_pk

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        PersonalProfile.objects.create(user=instance, user_pk=instance.id)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class TeamProfile(models.Model):
    STATUS_CHOICE = (
        ("진행중", "진행중"),
        ("완료", "완료")
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author', null=True)
    title = models.CharField(max_length=20, null=False)
    status = models.CharField(max_length=10, choices=STATUS_CHOICE, null=False, default=1)
    member = models.ManyToManyField(User, blank=True, related_name='member')
    content = models.TextField(null=False)
    image = models.ImageField(upload_to='group', null=True, blank=True)
    stack = models.ManyToManyField(Tag, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)