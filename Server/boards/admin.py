from django.contrib import admin
from rest_framework.fields import ChoiceField

# Register your models here.
from .models import RecruitmentBoard, CommonBoard, Worker

admin.site.register([CommonBoard, RecruitmentBoard, Worker])