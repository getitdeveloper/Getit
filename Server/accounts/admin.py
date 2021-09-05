from django.contrib import admin
from rest_framework_simplejwt.token_blacklist import models
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin

from .models import User


class NewOutstandingTokenAdmin(OutstandingTokenAdmin):

    def has_delete_permission(self, *args, **kwargs):
        return True


admin.site.unregister(models.OutstandingToken)
admin.site.register(models.OutstandingToken, NewOutstandingTokenAdmin)

admin.site.register(User)