from django.db import models

# Create your models here.
class CommonComment(models.Model):

    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    commonpost = models.ForeignKey('boards.CommonBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='commoncomments')
    content = models.TextField()
    parent = models.ForeignKey('self', related_name='reply', on_delete=models.CASCADE, null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-create_at']

class RecruitComment(models.Model):

    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    recruitmentpost = models.ForeignKey('boards.RecruitmentBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='recruitcomments')
    content = models.TextField()
    parent = models.ForeignKey('self', related_name='reply', on_delete=models.CASCADE, null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-create_at']