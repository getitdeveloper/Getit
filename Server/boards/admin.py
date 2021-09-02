from django.contrib import admin

# Register your models here.
from .models import RecruitmentBoard, CommonBoard

admin.site.register([CommonBoard, RecruitmentBoard])