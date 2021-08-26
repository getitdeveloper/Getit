from .views import CommonBoardPostDetailAPIView
from .views import CommonBoardPostListAPIView
from django.urls import path


urlpatterns = [
    path('commonboard/', CommonBoardPostListAPIView.as_view(), name='common_board_list'),
    path('commonboard/<int:pk>/', CommonBoardPostDetailAPIView.as_view(), name='common_board_detail'),
]