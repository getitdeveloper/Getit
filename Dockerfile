FROM python:3.9.1

WORKDIR /home/

RUN git clone -b test_server --single-branch https://github.com/getitdeveloper/Getit.git

WORKDIR /home/Getit/Server/

RUN pip install django
RUN pip install djangorestframework
RUN pip install pillow
RUN pip install djangorestframework-jwt
RUN pip install djangorestframework-simplejwt
RUN pip install dj-rest-auth
RUN pip install django-allauth
RUN pip install django-cors-headers
RUN pip install drf-yasg
RUN pip install requests
RUN pip install django-environ
RUN pip install gunicorn

RUN echo "SECRET_KEY=m-&6vckk8q8_5=eypmm!!7n^&jy2te*&n21y+^v-qkumx9dwtb" > .env
RUN python manage.py makemigrations accounts
RUN python manage.py makemigrations boards
RUN python manage.py makemigrations chats
RUN python manage.py makemigrations comments
RUN python manage.py makemigrations likes
RUN python manage.py makemigrations members
RUN python manage.py makemigrations portfolios
RUN python manage.py makemigrations profiles
RUN python manage.py makemigrations tags
RUN python manage.py migrate

RUN python manage.py collectstatic

EXPOSE 8000

CMD ["gunicorn", "apis.wsgi", "--bind", "0.0.0.0:8000"]