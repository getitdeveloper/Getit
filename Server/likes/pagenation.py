from rest_framework.pagination import PageNumberPagination

class LikePageNumberPagination(PageNumberPagination):
    page_size = 12