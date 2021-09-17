from django.contrib import admin

# Register your models here.
from .models import CommonComment, RecruitComment

admin.site.register([CommonComment, RecruitComment])