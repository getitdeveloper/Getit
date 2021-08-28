from rest_framework import status, mixins
from rest_framework.generics import GenericAPIView, get_object_or_404

from portfolios.models import Portfolio
from portfolios.permissions import IsOwnerOrReadOnly
from portfolios.serializers import PortfolioSerializer
from rest_framework.response import Response

class PortfolioAPIView(GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin):
    serializer_class = PortfolioSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Portfolio.objects.filter()

    def get(self, request, *args, **kwargs):
        return self.list(request)

    def post(self, request, *args, **kwargs):
        return self.create(request)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.delete(request, *args, **kwargs)