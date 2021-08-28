from rest_framework import status, mixins
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.views import APIView

from portfolios.models import Portfolio
from portfolios.permissions import IsOwnerOrReadOnly
from portfolios.serializers import PortfolioSerializer
from rest_framework.response import Response


class PortfolioListAPIView(APIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, user_pk):
        posts = Portfolio.objects.filter(user=user_pk)
        serializer = PortfolioSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, user_pk):
        serializer = PortfolioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PortfolioDetailAPIView(APIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        return get_object_or_404(Portfolio, pk=pk)

    def get(self, request, pk):
        portfolio = self.get_object(pk)
        serializer = PortfolioSerializer(portfolio)
        return Response(serializer.data)

    def put(self, request, pk):
        portfolio = self.get_object(pk)
        serializer = PortfolioSerializer(portfolio, data=request.data)
        self.check_object_permissions(self.request, portfolio)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        portfolio = self.get_object(pk)
        self.check_object_permissions(self.request, portfolio)
        portfolio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)