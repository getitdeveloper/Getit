from django.db import models

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    commonpost = models.ForeignKey('boards.CommonBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='commoncomments')
    recruitmentpost = models.ForeignKey('boards.RecruitmentBoard', on_delete=models.CASCADE, blank=True, null=True, related_name='recruitcomments')
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-create_at']