import json

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from profiles.models import TeamProfile
from requests import Response
from rest_framework.generics import GenericAPIView

from .models import Member


class MemberAddView(GenericAPIView):

    def post(self, request):
        """
        팀원 추가(POST)

        ---
                {
                    'teamprofile': 2
                }
        """
        requestData = json.loads(request.body)
        teamprofile_id = requestData['teamprofile']
        profile = TeamProfile.objects.get(id=teamprofile_id)
        member = request.user.id
        _member, _ = Member.objects.get_or_create(member=member)
        profile.members.add(member)
        res = {
            "message": "sucess"
        }
        return JsonResponse(res)