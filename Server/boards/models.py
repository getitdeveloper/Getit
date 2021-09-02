from profiles.models import TeamProfile
from tags.models import Tag
from accounts.models import User
from django.db import models

class CommonBoard(models.Model):

    CHOICES_CATEGORY = (
        ('자유 게시판', '자유 게시판'),
        ('질문 게시판', '질문 게시판'),
    )

    title = models.CharField(max_length=500)
    content = models.TextField()
    category = models.CharField(choices=CHOICES_CATEGORY, max_length=100)
    image = models.ImageField(upload_to='board', blank=True, null=True)
    likes = models.PositiveIntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)

class RecruitmentBoard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    study_name = models.ForeignKey(TeamProfile, on_delete=models.CASCADE)
    stack = models.ManyToManyField(Tag, blank=True)
    developer = models.PositiveIntegerField(default=0)
    designer = models.PositiveIntegerField(default=0)
    pm = models.PositiveIntegerField(default=0)
    content = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.BooleanField(default=0)