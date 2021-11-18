from django.contrib import admin

# Register your models here.
from tags.models import Tag

admin.site.register(Tag)