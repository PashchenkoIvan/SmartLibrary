from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse

from string import ascii_letters
from random import choice

class User(AbstractUser):
    @staticmethod
    def create_passwd() -> str:
        symb_list = list(ascii_letters)
        symb_list.extend([str(i) for i in range(9)])
        return ''.join([choice(symb_list) for _ in range(10)])
        
        
    email = models.EmailField(max_length=254, verbose_name="Email")
    full_name = models.CharField(max_length=70, verbose_name="ФИО")

    password = models.CharField(max_length=77, default=create_passwd())
   
    
    class Meta:
        verbose_name = ("Reader")
        verbose_name_plural = ("Readers")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Reader_detail", kwargs={"pk": self.pk})


class Librarian(models.Model):
    pass