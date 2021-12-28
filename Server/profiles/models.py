from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from accounts.models import User
from members.models import Member, WaitingForMember


class Profile(models.Model):
    CHOICES_JOB = (
        ('개발자', '개발자'),
        ('디자이너', '디자이너'),
        ('기획자', '기획자'),
    )
    LEVEL_CHOICES = (
        ('코린이', '코린이'),
        ('코등학생', '코등학생'),
        ('코대생', '코대생'),
        ('코드닌자', '코드닌자'),
        ('하수', '하수'),
        ('초수', '초수'),
        ('중수', '중수'),
        ('고수', '고수'),
    )
    user = models.OneToOneField('accounts.User', on_delete=models.CASCADE, related_name='profile')
    user_pk = models.IntegerField(unique=True)
    nickname = models.CharField(max_length=50, unique=True, null=True)
    job = models.CharField(choices=CHOICES_JOB, max_length=10, default='개발자')
    level = models.CharField(choices=LEVEL_CHOICES, max_length=10, blank=True, default='코린이')
    image = models.ImageField(upload_to='profile', blank=True, null=True)
    email = models.EmailField(max_length=50, null=True)
    info = models.TextField(null=True)
    git = models.CharField(max_length=100, blank=True, null=True)
    stack = models.ManyToManyField('tags.Tag')


    # def __str__(self):
    #     return self.user_pk

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, user_pk=instance.id)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class TeamProfile(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=64, null=False)
    status = models.BooleanField(default=0)
    content = models.TextField(null=False)
    image = models.ImageField(upload_to='group', null=True, blank=True)
    stack = models.ManyToManyField('tags.Tag')
    created_at = models.DateTimeField(auto_now_add=True)
    members = models.ManyToManyField('members.Member')
    waiting_members = models.ManyToManyField(WaitingForMember,db_constraint=False)
