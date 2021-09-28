from rest_framework import status
from .permissions import IsOwnerOrReadOnly
from django.core.checks import messages
from django.db import models
from accounts.models import User
from django.dispatch.dispatcher import receiver
from .serializers import MessageDetailGetSerializer, MessageDetailPostSerializer, MessageListSerializer
from .models import Message
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from django.db.models.aggregates import Max
from django.db.models import Subquery
from django.db.models import Q

# Create your views here.
class MessageListView(GenericAPIView):
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, sender):
        latest_messages_for_receivers = Message.objects.values('receiver').annotate(recent=Max('create_at'))
        messages = Message.objects.filter(sender=sender, receiver__in=Subquery(latest_messages_for_receivers.values('receiver')), create_at__in=Subquery(latest_messages_for_receivers.values('recent'))).order_by('-create_at')
        serializer = MessageListSerializer(messages, many=True)
        return Response(serializer.data)

class MessageDetailView(GenericAPIView):
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, sender, receiver):
        messages = Message.objects.filter(Q(sender=sender)|Q(sender=receiver)).order_by('-create_at')
        serializer = MessageDetailGetSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, sender, receiver):
        serializer = MessageDetailPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)