from rest_framework import serializers
from .models import Book, Category

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        
        fields = ('title',
                'inventory_num',
                'author',
                'number_of_pages',
                'publusher',
                'isbn',
                'book_type',
                'language',
                'cover_img_path',
                'cover_type',
                'category',
                'description',
                'time_to_read',
                'pubication_date',
                'pubication_year',
                'city_of_publishing',
                'ubk',
                'additional_type',
                'publication_type'
                )
        
    
class BookSerializerWithAdditional(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ("__all__")
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        
        fields = ("title",)
        