from django.urls import path
from portfolios.views import PortfolioDetailAPIView, PortfolioListAPIView

urlpatterns = [
    path('portfolio/user/<int:user_pk>/', PortfolioListAPIView.as_view(), name='portfolio_list'),
    path('portfolio/detail/<int:pk>/', PortfolioDetailAPIView.as_view(), name='portfolio_detail'),
]