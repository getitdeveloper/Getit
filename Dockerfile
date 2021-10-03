FROM python:3.9.0

WORKDIR /home/

RUN git clone -b server --single-branch https://github.com/getitdeveloper/Getit.git

WORKDIR /home/Getit/Server/

RUN pip install -r requirements.txt

RUN echo "SECRET_KEY=m-&6vckk8q8_5=eypmm!!7n^&jy2te*&n21y+^v-qkumx9dwtb" > .env

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0:8000"]