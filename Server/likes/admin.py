from django.contrib import admin

# Register your models here.
from .models import CommonBoardLike, RecruitBoardLike

# Register your models here.
admin.site.register([CommonBoardLike, RecruitBoardLike])