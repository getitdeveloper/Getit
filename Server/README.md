# Getit API (Django REST Framework)

### ✏ Description

- dj-rest-auth를 활용한 소셜로그인 구현(kakao, google, github) 
- 팀/개인프로필, 게시글, 댓글, 포트폴리오 CRUD

### Model Composition

https://www.erdcloud.com/d/77bHS6EnuxGrxneH5

### ⚙ Envirionments (python 3.8.0)

> pip install django <br>
> pip install django <br>
> pip install djangorestframework <br>
> pip install pillow <br>
> pip install djangorestframework-jwt <br>
> pip install djangorestframework-simplejwt <br>
> pip install dj-rest-auth <br>
> pip install django-allauth <br>
> pip install django-cors-headers <br>
> pip install drf-yasg <br>
> pip install requests <br>
> pip install django-environ <br>
> pip install gunicorn <br>


❗ And, you have to create `.env` file in root.

```
Project tree
------------
server
|   .env
|   .gitignore
|   manage.py
|   README.md
|   requirements.txt
|   
+---accounts
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---alarm
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   tests.py
|   |   views.py
|   |   
+---apis
|   |   asgi.py
|   |   settings.py
|   |   urls.py
|   |   wsgi.py
|   |   
+---boards
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   pagenation.py
|   |   permissions.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---chats
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   permissions.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---comments
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   permissions.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---likes
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   pagenation.py
|   |   permissions.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---logs
|   |   mysite.log
+---members
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---portfolios
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   permissions.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---profiles
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   permissions.py
|   |   serializers.py
|   |   tests.py
|   |   urls.py
|   |   views.py
+---tags
|   |   admin.py
|   |   apps.py
|   |   models.py
|   |   tests.py
|   |   views.py
```



### 📃 API Descriptions

- https://api.getit.best
  <br>

### ▶ Execution

> pip install -r requirements.txt

```python
python manage.py makemigrations

python manage.py migrate

# execute django web server
python manage.py runserver

# if you see error "No such table profiles",
## python manage.py makemigrations profiles
## python manage.py migrate
## python manage.py runserver

""" in another cmd """
# please user httpie for test

```

<br>
