from django.urls import path
from .views import BookApi, CategoriesApi

urlpatterns = [
    path('books/', BookApi.as_view()),
    path('categories/', CategoriesApi.as_view())
]
