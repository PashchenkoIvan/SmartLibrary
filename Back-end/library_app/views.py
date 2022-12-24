from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from .models import Book, Category
from .serializers import BookSerializer, BookSerializerWithAdditional, CategorySerializer
from .permissions import IsLibrarianOrReadOnly

def serializer_obj_save(serializer):
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    


class BookApi(APIView):
    permission_classes = [IsLibrarianOrReadOnly]
    @staticmethod
    def select_serializer(req):
        is_additional = req.query_params.get('is_additional')
        print(type(is_additional))
        if is_additional and is_additional == "True":
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
        return serializer_obj_save(serializer)
    
    def putch(self, req):
        print("putch")


class CategoriesApi(APIView):
    def get(self, req, pk=None):
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
    def post(self, req, pk=None):
        serializer = CategorySerializer(data=req.data)
        return serializer_obj_save(serializer)

    def delete(self, req, pk):
        try:
            category = Category.objects.get(title=pk)
        except ObjectDoesNotExist:
            return Response(f"Error: Category with id: {pk} does not exist")
        category.delete()
        return Response({'message': f"Item has been successfully deleted"})
    
    def put(self, req, pk):
        try:
            category = Category.objects.get(id=pk)
        except ObjectDoesNotExist:
            return Response(f"Error: Category: {pk} does not exist")
        serializer = CategorySerializer(category, data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  