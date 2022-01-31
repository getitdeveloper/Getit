from django.test import TestCase
from rest_framework.test import APIRequestFactory

factory = APIRequestFactory()
request = factory.post('/api/board/', {
                    "title":"asdasdasd",
                    "category":"question",
                    "content":"asdasdasdasd",
                    "user":1,
                    "stack":["python", "java"],
                    "worker":["기획자","디자이너"]
                })