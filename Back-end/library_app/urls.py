from django.urls import path
from .views import BookApi

urlpatterns = [
    path('', BookApi.as_view()),
]
