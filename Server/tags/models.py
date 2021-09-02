from django.db import models


class Tag(models.Model):
    post = models.ForeignKey('boards.CommonBoard', on_delete=models.CASCADE, blank=True, null=True)
    recruitpost = models.ForeignKey('boards.RecruitmentBoard', on_delete=models.CASCADE, blank=True, null=True)
    profile = models.ForeignKey('profiles.Profile', on_delete=models.CASCADE, blank=True, null=True)
    teamprofile = models.ForeignKey('profiles.TeamProfile', on_delete=models.CASCADE, blank=True, null=True)
    name =models.CharField(max_length=500, verbose_name='태그명', blank=True)

    def __str__(self):
        return self.name
