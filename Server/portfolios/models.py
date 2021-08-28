from django.db import models

from accounts.models import User


class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    contents = models.TextField(null=False)
    images = models.ImageField(upload_to='portfolio', blank=True, default="../media/profile/Untitle.jpeg")

    def __str__(self):
        return f"{self.title} {self.images}"