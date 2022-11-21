from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    inventory_num = models.IntegerField()
    number_of_pages = models.IntegerField()
    publusher = models.CharField(max_length=100)
    isbn = models.IntegerField()  # A unique number of the book edition, necessary for the distribution of the book in retail chains
    book_type = models.CharField(max_length=1, choices=(
        ("D", "Електронна"),
        ("P", "Паперова"),
    ))
    language = models.CharField(max_length=100)
    cover_type = models.CharField(max_length=1, choices=(
        ("S", "М'ягка"),
        ("H", "Твёрда"),
    ))
    category = models.ManyToManyField("Category", related_name=("books"))
    description = models.TextField()
    time_to_read = models.IntegerField()
    pubication_date = models.DateField()
    city_of_publishing = models.CharField(max_length=70)
    
    additional_type = models.CharField(max_length=1, default="B", choices=(
        ("B", "Книга"),
        ("J", "Журнал"),
        ("N", "Газета")
    ))
    publication_type = models.CharField(max_length=10, choices=(
        ("Period", "Періодичні видання"),
        ("Books", "Книги"),
        ("Dgtl", "Цифрові видання"), 
        ("Map", "Карта"),
    ))
    
    def __str__(self) -> str:
        return self.title
    
    

class Category(models.Model):
    title = models.CharField(max_length=100)
    
    def __str__(self) -> str:
        return self.title