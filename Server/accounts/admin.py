from django.contrib import admin

# Register your models here.
from accounts.models import User

admin.site.register(User)