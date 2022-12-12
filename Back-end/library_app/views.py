from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from .models import Book, Category
from .serializers import BookSerializer, BookSerializerWithAdditional, CategorySerializer

class BookApi(APIView):

    @staticmethod
    def select_serializer(req):
        is_additional = req.query_params.get('is_additional')
        if is_additional:
            serializer_obj = BookSerializerWithAdditional
        else:
            serializer_obj = BookSerializer
        return serializer_obj
    
    def get(self, req):
        book = req.query_params.get('title')
        serializer_obj = self.select_serializer(req)
        if book:
            try:
                book = Book.objects.get(title=book)
                serializer = serializer_obj(book)
            except ObjectDoesNotExist:
                return Response(f"Error: Book: {book} doesn't exist")
        else:
            books = Book.objects.all()
            serializer = serializer_obj(books, many=True)
        return Response(serializer.data)
    
    def post(self, req, format=None):
        categories = req.data['category']
        categories_id = []
        print(categories)
        for category in categories:
            try:
                category_obj = Category.objects.get(title=category)
            except ObjectDoesNotExist:
                return Response(f"Error: Category: {category} doesn't exist")
            categories_id.append(category_obj.id)
        req.data['category'] = categories_id
            
        print(categories)
        serializer_obj = self.select_serializer(req)
        serializer = serializer_obj(data=req.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CategoriesApi(APIView):
    def get(self, req):
        category = req.query_params.get('title')
        if category:
            try:
                category = Category.objects.get(title=category)
                books = category.books.all()
                serializer = BookSerializer(books, many=True)
                return Response(serializer.data)
            except ObjectDoesNotExist:
                return Response(f"Error: Category: {category} doesn't exist")
        else:
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            return Response(serializer.data)
        
