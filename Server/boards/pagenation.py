from rest_framework.pagination import PageNumberPagination

class BoardPageNumberPagination(PageNumberPagination):
    page_size = 12