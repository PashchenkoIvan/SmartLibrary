from django.contrib.auth.models import (
	AbstractBaseUser, BaseUserManager, PermissionsMixin
)

from django.db import models
from transliterate import translit

class UserManager(BaseUserManager):
    """
    Django требует, чтобы кастомные пользователи определяли свой собственный
    класс Manager. Унаследовавшись от BaseUserManager, мы получаем много того
    же самого кода, который Django использовал для создания User (для демонстрации).
    """

    def create_user(self, username, email, password=None):
        """ Создает и возвращает пользователя с имэйлом, паролем и именем. """
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        """ Создает и возввращет пользователя с привилегиями суперадмина. """
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user
    

class User(AbstractBaseUser, PermissionsMixin):

    def get_user_id(self):
        return translit(self.full_name, language_code='uk', reversed=True).replace(" ", "_").lower()
    
    full_name = models.CharField(db_index=True, max_length=255)
    username = models.CharField(db_index=True, max_length=255)
    email = models.EmailField(db_index=True, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_disabled = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    phone_number = models.CharField(max_length=254, verbose_name="Телефон", blank=True, null=True)
    home_address = models.CharField(max_length=100, verbose_name='Робоча адресса', blank=True, null=True) 
    work_address = models.CharField(max_length=100, verbose_name='Домашня адресса', blank=True, null=True) 
    birthday = models.DateField(blank=True, null=True)
    last_visit = models.DateTimeField(auto_now=True)
    comment = models.TextField(blank=True, null=True)
    is_disabled_person = models.BooleanField(default=False)

    password = models.CharField(max_length=130, null=True, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        """ Строковое представление модели (отображается в консоли) """
        return self.email

    def get_full_name(self):
        return self.full_name

    def get_short_name(self):
        return self.username

    def get_user_id(self):
        return translit(self.full_name, language_code='uk', reversed=True).replace(" ", "_").lower()
    