
from django.db import models

class CommonBoard(models.Model):
    CHOICES_CATEGORY = (
        ('free', 'free'),
        ('question', 'question'),
    )
    title = models.CharField(max_length=500)
    content = models.TextField()
    category = models.CharField(choices=CHOICES_CATEGORY, max_length=20)
    image = models.ImageField(upload_to='board', blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('accounts.User', on_delete=models.SET_NULL, null=True)
    stack = models.ManyToManyField('tags.Tag')
    worker = models.ManyToManyField('boards.Worker')


    class Meta:
        ordering = ['-create_at']

class RecruitmentBoard(models.Model):

    user = models.ForeignKey('accounts.User', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=256)
    study = models.ForeignKey('profiles.TeamProfile', on_delete=models.CASCADE, null=False, blank=False)
    developer = models.PositiveIntegerField(default=0)
    designer = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='board', blank=True, null=True)
    pm = models.PositiveIntegerField(default=0)
    content = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.BooleanField(default=0)
    stack = models.ManyToManyField('tags.Tag')
    create_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ['-create_at']

class Worker(models.Model):
    CHOICES_WORKER = (
        ('기획자','기획자'),
        ('개발자','개발자'),
        ('디자이너','디자이너'),
    )
    worker = models.CharField(choices=CHOICES_WORKER,max_length=20)