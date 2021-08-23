# Generated by Django 3.2.6 on 2021-08-22 16:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('boards', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tags', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_pk', models.IntegerField(null=True)),
                ('nickname', models.CharField(max_length=50, null=True, unique=True)),
                ('job', models.CharField(choices=[('개발자', '개발자'), ('디자이너', '디자이너'), ('기획자', '기획자')], max_length=10, null=True)),
                ('level', models.CharField(choices=[('코린이', '코린이'), ('코등학생', '코등학생'), ('코대생', '코대생'), ('코드닌자', '코드닌자')], max_length=10, null=True)),
                ('image', models.ImageField(null=True, upload_to='profile')),
                ('mymail', models.EmailField(max_length=50, null=True)),
                ('myinfo', models.TextField(null=True)),
                ('mygit', models.CharField(max_length=100, null=True)),
                ('portfolio', models.TextField(null=True)),
                ('stack', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tags.tag')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('status', models.CharField(choices=[(1, '진행중'), (2, '완료')], default=1, max_length=10)),
                ('content', models.TextField()),
                ('image', models.ImageField(null=True, upload_to='group')),
                ('is_leader', models.BooleanField(default='False')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('board', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='boards.board')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('stack', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tags.tag')),
            ],
        ),
    ]
