from django.db import models

from accounts.models import User


class Portfolio(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    link = models.CharField(max_length=128, null=True)
    contents = models.TextField(null=False)
    image = models.ImageField(upload_to='portfolio', blank=True, null=True, default="../media/profile/Untitle.jpeg")

    def __str__(self):
        return f"{self.title} {self.image}"