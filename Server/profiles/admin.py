from django.contrib import admin

# Register your models here.
from profiles.models import Profile, TeamProfile, IsLeader

admin.site.register([Profile, TeamProfile, IsLeader])