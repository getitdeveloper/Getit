from django.urls import path
from .views import LikeAPIView

urlpatterns = [
    path('<int:post_id>/likes/', LikeAPIView.as_view(), name=''),
]