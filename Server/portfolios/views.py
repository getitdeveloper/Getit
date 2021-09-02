from rest_framework import status
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.views import APIView

from portfolios.models import Portfolio
from portfolios.permissions import IsOwnerOrReadOnly
from portfolios.serializers import PortfolioSerializer
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser


class PortfolioListAPIView(GenericAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]
    parser_classes = (FormParser, MultiPartParser)

    def get(self, request, user_id):
        posts = Portfolio.objects.filter(user=user_id)
        serializer = PortfolioSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, user_id):
        serializer = PortfolioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PortfolioDetailAPIView(GenericAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]
    parser_classes = (MultiPartParser,)
    queryset = Portfolio

    def get_object(self, pk, user_id):
        return get_object_or_404(Portfolio, pk=pk, user_id=user_id)

    def get(self, request, pk, user_id):
        portfolio = self.get_object(pk, user_id)
        serializer = PortfolioSerializer(portfolio)
        return Response(serializer.data)

    def put(self, request, pk, user_id):
        portfolio = self.get_object(pk, user_id)
        serializer = PortfolioSerializer(portfolio, data=request.data)
        self.check_object_permissions(self.request, portfolio)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, user_id):
        portfolio = self.get_object(pk, user_id)
        self.check_object_permissions(self.request, portfolio)
        portfolio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)