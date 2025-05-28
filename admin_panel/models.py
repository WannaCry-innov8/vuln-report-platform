from django.db import models

# Create your models here.
class Users(models.Model):
    user_id = models.AutoField(primary_key=True) #primary key
    name = models.CharField(max_length=255)
    email  = models.EmailField(unique=True)
    password_hash = models.CharField(max_length=128) #have to auth
    designation = models.CharField(max_length=100)
    institution_id = models.IntegerField()
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True, blank=True)
