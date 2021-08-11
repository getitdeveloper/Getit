# Backend
# getit API (Django, Django REST Framework)

### ✏ Description


### Model Composition

```python


```

### ⚙ Envirionments (python 3.8.0)

> pip install django==3.1.7

> pip install djangorestframework==3.12.4

> pip install django-dotenv==1.4.2

❗ And, you have to create `.env` file in root.


then, please insert secret key (you can get at https://djskgen.herokuapp.com/)

```
SECRET_KEY="value"
DEBUG=True
```

<br>

### 📃 API Descriptions

<b>accounts</b>



<b>boards</b>


  <br>

### ▶ Execution

> pip install httpie

```python
python manage.py makemigrations

python manage.py migrate

# execute django web server
python manage.py runserver

# if you see error "No such table Todo",
## python manage.py makemigrations todo
## python manage.py migrate
## python manage.py runserver

""" in another cmd """
# please user httpie for test

```

<br>
