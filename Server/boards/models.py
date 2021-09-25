
from django.db import models

class CommonBoard(models.Model):
    CHOICES_CATEGORY = (
        ('free', 'free'),
        ('question', 'question'),
    )
    title = models.CharField(max_length=500)
    content = models.TextField()
    category = models.CharField(choices=CHOICES_CATEGORY, max_length=20)
    worker = models.ManyToManyField('boards.ChoicesFilter')
    image = models.ImageField(upload_to='board', blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    stack = models.ManyToManyField('tags.Tag')

    class Meta:
        ordering = ['-create_at']

class RecruitmentBoard(models.Model):

    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    study = models.ForeignKey('profiles.TeamProfile', on_delete=models.CASCADE, null=False, blank=False)
    developer = models.PositiveIntegerField(default=0)
    designer = models.PositiveIntegerField(default=0)
    worker = models.ManyToManyField('boards.ChoicesFilter')
    pm = models.PositiveIntegerField(default=0)
    content = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.BooleanField(default=0)
    stack = models.ManyToManyField('tags.Tag')
    create_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-create_at']

class ChoicesFilter(models.Model):
    CHOICES_FILTER = (
        ('개발자', '개발자'),
        ('기획자', '기획자'),
        ('디자이너', '디자이너'),
    )
    workers = models.CharField(max_length=10, choices=CHOICES_FILTER)
