from django.contrib import admin

# Register your models here.
from .models import CommonBoard, RecruitmentBoard

admin.site.register([CommonBoard, RecruitmentBoard])

