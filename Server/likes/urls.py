from django.urls import path
from .views import CommonBoardLikeAPIView, CommonBoardLikePostAPIView, RecruitmentBoardLikeAPIView, RecruitmentBoardLikePostAPIView

urlpatterns = [
    path('<int:board_id>/commonlikes/', CommonBoardLikeAPIView.as_view(), name='commonlike'),
    path('commonlikepost/<int:user_id>/', CommonBoardLikePostAPIView.as_view(), name='commonlikepost'),
    path('<int:board_id>/recruitlikes/', RecruitmentBoardLikeAPIView.as_view(), name='recruitlike'),
    path('recruitlikepost/<int:user_id>/', RecruitmentBoardLikePostAPIView.as_view(), name='recruitlikepost'),
]