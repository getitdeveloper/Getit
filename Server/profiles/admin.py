from django.contrib import admin

# Register your models here.
from profiles.models import PersonalProfile, TeamProfile

admin.site.register([PersonalProfile, TeamProfile])