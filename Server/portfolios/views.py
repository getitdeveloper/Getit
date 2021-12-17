from rest_framework import status
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.views import APIView

from portfolios.models import Portfolio
from .permissions import IsOwnerOrReadOnly
from portfolios.serializers import PortfolioSerializer
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser


class PortfolioListAPIView(GenericAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]
    #parser_classes = (FormParser, MultiPartParser)

    def get(self, request, user_id):
        """
            포트폴리오 list (GET)

            ---
                {
                    "id":1,
                    "user":2,
                    "title":"geit",
                    "contents":"장고,리액트를 활용한 커뮤니티 사이트입니다.",
                    "link": "abcdefg.com",
                    "images":"/media/profile/Untitle.jpeg"
                },
                {
                    "id": 2,
                    "user": 2,
                    "title": "youtube",
                    "contents": "유튜브 클론코딩 사이트입니다..",
                    "link": "abcdefg.com",
                    "image": "/media/profile/Untitle.jpeg"
                }
        """
        posts = Portfolio.objects.filter(user=user_id)
        serializer = PortfolioSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, user_id):
        """
            포트폴리오 list (POST)

            ---
                {
                    "user": 2,
                    "title": "geit",
                    "contents": "장고,리액트를 활용한 커뮤니티 사이트입니다.",
                    "image": "",
                    "link": "abcdefg.com"
                }

        """
        serializer = PortfolioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PortfolioDetailAPIView(GenericAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]
    # parser_classes = (MultiPartParser,)
    # queryset = Portfolio

    def get_object(self, pk, user_id):
        return get_object_or_404(Portfolio, pk=pk, user_id=user_id)

    def get(self, request, pk, user_id):
        """
            포트폴리오 detail (GET)

            ---
                {
                    "id": 1,
                    "user": 2,
                    "title": "geit",
                    "contents": "장고,리액트를 활용한 커뮤니티 사이트입니다.",
                    "image": "/media/profile/Untitle.jpeg",
                    "link": "abcdefg.com"
                }
        """
        portfolio = self.get_object(pk, user_id)
        serializer = PortfolioSerializer(portfolio, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, user_id):
        """
            포트폴리오 detail (PUT:수정)

            ---
                {
                    "user": 2,
                    "title": "졸린사람들 모여라",
                    "contents": "밤샘에 지친 이들을 위한모입니다.",
                    "image":null,
                    "link": "abcdefg.com"
                }
        """
        portfolio = self.get_object(pk, user_id)
        serializer = PortfolioSerializer(portfolio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, user_id):
        """
            포트폴리오 detail (DELETE)

            ---
        """
        portfolio = self.get_object(pk, user_id)
        self.check_object_permissions(self.request, portfolio)
        portfolio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)