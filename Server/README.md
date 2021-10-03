# Getit API (Django REST Framework)

### ✏ Description

- dj-rest-auth를 활용한 소셜로그인 구현(kakao, google, github) 
- 

### Model Composition

```python
Accounts {
    abstractuser
}

Boards {
    Board
    title: string
    contents:string(내용)
    auther:foreignkey(User)
    image: imagefield
    category:string(choices)
    created_at:datetime
d
    RecruitmentBoard
    title: string
    contents:string(내용)
    auther:foreignkey(User)
    region:foreignKey(places)
    image: imagefield
    id_admin: boolean(호스트-게스트분리)
    created_at:datetime
}

Comments{
    auther:foreignkey(User)
    board: foreignkey(Board)
    re_board: foreignkey(RecruitmentBoard)
    contents: string
    created_at:datetime
}

Profiles{
    user: onetoone(User),
    nickname : string,
    gender: string(choices(여성,남성)),
    age:integer(),
    region:string,
    info:string,
    image: imagefield,
    pm:string(별점방식)

}

places{
    Place
place : string(api에서 받아온 위치)
User:foreignKey(User)
}

채팅,신고 - firebase realtime db이용 서버 DB와 별도 운영

```

### ⚙ Envirionments (python 3.8.0)

> pip install django==3.2.6


❗ And, you have to create `MY_SETTINGS.py` file in root.

```
Project tree
------------
root
├── venv
├── README.md
├── apis
│   ├── __init__.py
│   ├── asgi.py
│   ├── MYSETTINGS.py # 시크릿키 및 비밀 보안사항 가리기용 파일
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── accounts
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── serializers.py
    ├── tests.py
    ├── urls.py
    └── views.py
└── boards
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── serializers.py
    ├── tests.py
    ├── urls.py
    └── views.py
└── comments
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── serializers.py
    ├── tests.py
    ├── urls.py
    └── views.py
└── profiles
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── serializers.py
    ├── tests.py
    ├── urls.py
    └── views.py
```

then, please insert secret key (you can get at https://djskgen.herokuapp.com/)

```
SECRET_KEY="value"
DEBUG=True
```

<br>

### 📃 API Descriptions

<b>accounts</b>



<b>boards</b>



<b>comments</b>



<b>profiles</b>


  <br>

### ▶ Execution

> pip install httpie

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
