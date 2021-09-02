from django.urls import path
from portfolios.views import PortfolioDetailAPIView, PortfolioListAPIView

urlpatterns = [
    path('<int:user_id>/portfolios/', PortfolioListAPIView.as_view(), name='portfolio_list'),
    path('<int:user_id>/portfolio/<int:pk>/', PortfolioDetailAPIView.as_view(), name='portfolio_detail'),
]