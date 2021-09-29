FROM python:3.9.0

WORKDIR /home/

RUN git clone -b server --single-branch https://github.com/leeceo97/Getit.git

WORKDIR /home/

RUN python -m pip install --upgrade pip

WORKDIR /home/Getit/Server/

RUN pip install -r requirements.txt

RUN pip install gunicorn

WORKDIR /home/Getit/Server/apis/

RUN echo SECRET_KEY="m-&6vckk8q8_5=eypmm!!7n^&jy2te*&n21y+^v-qkumx9dwtb" > MY_SETTINGS.py

WORKDIR /home/Getit/Server/

RUN python manage.py migrate

EXPOSE 8000

CMD ["gunicorn", "getit.wsgi", "--bind", "0.8000"]