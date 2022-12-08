from django.db import models
from django.urls import reverse

from library_app.models import Book

class Visitor(models.Model):
    full_name = models.CharField(max_length=70, verbose_name="ФИО")
    email = models.EmailField(max_length=254, verbose_name="Email")
    full_address = models.CharField(max_length=100, verbose_name='Aдресса') 
    birthday = models.DateField()
    last_visit = models.DateTimeField()
    comment = models.TextField()
    books = models.ForeignKey(Book, on_delete=models.SET_NULL, blank=True, null=True)
    
    class Meta:
        verbose_name = ("Reader")
        verbose_name_plural = ("Readers")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Reader_detail", kwargs={"pk": self.pk})


class Librarian(models.Model):
    pass