from django.contrib import admin
from rest_framework.fields import ChoiceField

# Register your models here.
from .models import Member, WaitingForMember

admin.site.register(Member)
admin.site.register(WaitingForMember)