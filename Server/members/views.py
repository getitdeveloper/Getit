import json

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from profiles.models import TeamProfile
from requests import Response
from rest_framework.generics import GenericAPIView

from .models import Member, WaitingForMember
from .serializers import WaitingMemberSerializer


class MemberAddView(GenericAPIView):

    def post(self, request):
        """
        팀원 추가(POST)

        ---
                {
                    'teamprofile': 2,
                    'member': 3
                }
        """
        requestData = json.loads(request.body)
        teamprofile_id = requestData['teamprofile']
        member_id = requestData['member']
        profile = TeamProfile.objects.get(id=teamprofile_id)
        _member, _ = Member.objects.get_or_create(member=member_id)
        profile.members.add(_member)
        res = {
            "message": "sucess"
        }
        return JsonResponse(res)

class MemberWaitingView(GenericAPIView):

    def get(self, request, teamprofile):
        """
                프로젝트 지원 대기 멤버 조회(GET)

                ---
                        {
                            'teamprofile': 2,
                            'waiting_member': 3
                        }
                """
        teamprofile_id = request.GET.get('teamprofile')
        teamprofile = TeamProfile.objects.get(id= teamprofile_id)
        wating_member = teamprofile.waitingmember
        serializer = WaitingMemberSerializer(wating_member, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        """
        프로젝트 지원 대기 멤버 추가(POST)

        ---
                {
                    'teamprofile': 2,
                    'waiting_member': 3
                }
        """
        requestData = json.loads(request.body)
        teamprofile_id = requestData['teamprofile']
        waiting_member = requestData['waiting_member']
        teamprofile = TeamProfile.objects.get(id=teamprofile_id)
        print(teamprofile)
        _member, _ = WaitingForMember.objects.get_or_create(waitmember=waiting_member)

        teamprofile.waitingmember.add(_member)
        res = {
            "message": "success",
            'teamprofile': teamprofile_id,
            'waiting_member': waiting_member
        }
        return JsonResponse(res)