
from django.db import models

class CommonBoard(models.Model):
    CHOICES_CATEGORY = (
        ('free', 'free'),
        ('question', 'question'),
    )
    title = models.CharField(max_length=500)
    content = models.TextField()
    category = models.CharField(choices=CHOICES_CATEGORY, max_length=100)
    image = models.ImageField(upload_to='board', blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    stack = models.ManyToManyField('tags.Tag')

class RecruitmentBoard(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    study = models.ForeignKey('profiles.TeamProfile', on_delete=models.CASCADE)
    developer = models.PositiveIntegerField(default=0)
    designer = models.PositiveIntegerField(default=0)
    pm = models.PositiveIntegerField(default=0)
    content = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.BooleanField(default=0)
    stack = models.ManyToManyField('tags.Tag')