from django.urls import path
from .views import LikeAPIView

urlpatterns = [
    path('<int:board_id>/likes/', LikeAPIView.as_view(), name=''),
]