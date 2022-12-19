from rest_framework import serializers
from .models import Book, Category
from library_app.validators import status_validator


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        
        fields = ('title',
                'inventory_num',
                'author',
                'number_of_pages',
                'publisher',
                'isbn',
                'book_type',
                'language',
                'cover_img_path',
                'cover_type',
                'category',
                'description',
                'time_to_read',
                'publication_date',
                'publication_year',
                'city_of_publishing',
                'ubk',
                'additional_type',
                'publication_type',
                'status'
                )
    def validate(self, data):
        book_status = data.get('status')
        visitor = data.get('current_reader')
        status_validator(book_status, visitor) 
        
        return data
        
        
class BookSerializerWithAdditional(BookSerializer, serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ("__all__")
        
    def validate(self, data):
        return super().validate(data)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("title", "color")
