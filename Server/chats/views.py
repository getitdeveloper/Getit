from rest_framework import serializers, status
from .permissions import MessageDetailIsOwnerOrReadOnly, MessageListIsOwnerOrReadOnly
from django.core.checks import messages
from django.db import models
from accounts.models import User
from django.dispatch.dispatcher import receiver
from .serializers import MessageDetailGetSerializer, MessageDetailPostSerializer, MessageListSerializer
from .models import ChatMember, ChatRoom, Message
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from django.db.models.aggregates import Max
from django.db.models import Subquery
from django.db.models import Q

# Create your views here.
class MessageListView(GenericAPIView):
    permission_classes = [MessageListIsOwnerOrReadOnly]

    def get(self, request, sender):
        """
            채팅 list (GET)

            ---
                [
                    {
                        "chat_room": 2,
                        "sender": {
                            "id": 1,
                            "profile": {
                                "nickname": null
                            }
                        },
                        "content": "test2",
                        "create_at": "2021-09-30T09:52:37.228979+09:00"
                    },
                    {
                        "chat_room": 1,
                        "sender": {
                            "id": 2,
                            "profile": {
                                "nickname": "google"
                            }
                        },
                        "content": "test4",
                        "create_at": "2021-09-30T09:50:04.474397+09:00"
                    }
                ]
        """
        user_chat_rooms = ChatMember.objects.filter(me=sender)
        user_chat_room_id = [user_chat_room.chatroom for user_chat_room in user_chat_rooms]
        last_messages_by_chat_room = Message.objects.filter(chat_room__in=user_chat_room_id).values('chat_room_id').annotate(last_message_id=Max('id'))
        messages = Message.objects.filter(id__in=Subquery(last_messages_by_chat_room.values('last_message_id'))).order_by('-create_at')
        serializer = MessageListSerializer(messages, many=True)
        return Response(serializer.data)

class MessageDetailView(GenericAPIView):
    permission_classes = [MessageDetailIsOwnerOrReadOnly]

    def get(self, request, chat_room):
        """
            채팅 detail (GET)

            ---
                [
                    {
                        "sender": {
                            "id": 2,
                            "profile": {
                                "nickname": "google"
                            }
                        },
                        "content": "test10",
                        "create_at": "2021-09-30T13:34:24.828456+09:00"
                    },
                    {
                        "sender": {
                            "id": 3,
                            "profile": {
                                "nickname": "kakao"
                            }
                        },
                        "content": "test4",
                        "create_at": "2021-09-30T09:50:04.474397+09:00"
                    },  
                    {
                        "sender": {
                            "id": 2,
                            "profile": {
                                "nickname": "google"
                            }
                        },
                        "content": "test3",
                        "create_at": "2021-09-30T09:49:58.137295+09:00"
                    },
                    {
                        "sender": {
                            "id": 3,
                            "profile": {
                                "nickname": "kakao"
                            }
                        },
                        "content": "test2",
                        "create_at": "2021-09-30T09:49:53.616826+09:00"
                    }
                ]
        """
        messages = Message.objects.filter(chat_room=chat_room).order_by('-create_at') 
        serializer = MessageDetailGetSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, chat_room):
        """
            채팅 detail (POST)

            ---
                {
                    "sender": 2,
                    "content": "test10"
                }
        """
        request.data['chat_room'] = chat_room
        serializer = MessageDetailPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FirstMessageView(GenericAPIView):
    permission_classes = [MessageDetailIsOwnerOrReadOnly]

    def post(self, request, sender, receiver):
        """
            첫채팅 detail (POST)

            ---
                {
                    "sender": 2,
                    "content": "test10"
                }
        """
        chat_room = ChatMember.objects.filter(me=sender, oppnent=receiver)
        if chat_room.exists():
            request.data['chat_room'] = chat_room.first().chatroom_id
            serializer = MessageDetailPostSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            new_chat_room = ChatRoom.objects.create()
            ChatMember.objects.create(chatroom_id=new_chat_room.id, me_id=sender, oppnent_id=receiver)
            ChatMember.objects.create(chatroom_id=new_chat_room.id, me_id=receiver, oppnent_id=sender)
            request.data['chat_room'] = new_chat_room.id
            serializer = MessageDetailPostSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
