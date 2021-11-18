from django.contrib import admin
from rest_framework.fields import ChoiceField

# Register your models here.
from .models import RecruitmentBoard, CommonBoard

admin.site.register([CommonBoard, RecruitmentBoard])