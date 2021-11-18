from rest_framework.pagination import PageNumberPagination

class BoardPageNumberPagination(PageNumberPagination):
    page_size = 12

class WholeBoardCommonPageNumberPagination(PageNumberPagination):
    page_size = 4

class WholeBoardRecruitmentPageNumberPagination(PageNumberPagination):
    page_size = 6