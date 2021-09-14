from django.contrib import admin

# Register your models here.
from profiles.models import Profile, TeamProfile

admin.site.register([Profile, TeamProfile])