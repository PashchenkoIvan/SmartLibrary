from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=70, verbose_name="Название мероприятия")
    description = models.TextField(verbose_name="Описание")
    date = models.DateField()    

