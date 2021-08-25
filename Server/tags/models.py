from django.db import models

class Tag(models.Model):
    name =models.CharField(max_length=32, verbose_name='태그명', blank=True)

    def __str__(self):
        return self.name
