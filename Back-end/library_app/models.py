from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    inventory_num = models.IntegerField()
    number_of_pages = models.IntegerField()
    publusher = models.CharField(max_length=100)
    isbn = models.IntegerField()
    book_type = models.CharField(max_length=50)
    language = models.CharField(max_length=100)
    cover_type = models.CharField(max_length=4, choices=(
        ("Soft", "Мягкая"),
        ("Hard", "Твёрдая"),
    ))
    category = models.ForeignKey("Category", related_name=("books"), on_delete=models.SET_NULL)
    description = models.TextField()
    time_to_read = models.IntegerField()
    pubication_date = models.DateField()
    city_of_publishing = models.CharField(max_length=70)
    
# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)
    