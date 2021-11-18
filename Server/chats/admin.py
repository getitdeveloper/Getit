from django.contrib import admin
from .models import ChatMember, ChatRoom, Message


admin.site.register([ChatRoom, Message, ChatMember])