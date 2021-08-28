from django.urls import path
from portfolios.views import PortfolioAPIView

urlpatterns = [
    path('portfolio/<int:pk>/', PortfolioAPIView.as_view(), name='portfolio'),
]