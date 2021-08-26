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
