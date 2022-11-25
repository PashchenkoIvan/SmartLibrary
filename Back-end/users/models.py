from django.db import models
from django.urls import reverse

class Reader(models.M):
    full_name = models.CharField(max_length=70, verbose_name="ФИО")
    models.EmailField((""), max_length=254)
    
    class Meta:
        verbose_name = ("Reader")
        verbose_name_plural = ("Readers")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Reader_detail", kwargs={"pk": self.pk})

# Create your models here.
