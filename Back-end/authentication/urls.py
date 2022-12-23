from django.urls import path

from .views import AuthView

urlpatterns = [
    path('', AuthView.as_view()),
    path('<int:pk>', AuthView.as_view()),
]