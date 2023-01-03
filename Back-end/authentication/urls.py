from django.urls import path

from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView
)

from .views import AuthView
from .JWT.token_views import MyObtainTokenPairView
urlpatterns = [
    path('', AuthView.as_view()),
    path('<int:pk>', AuthView.as_view()),
    path('token', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify', TokenVerifyView.as_view(), name='token_verify'),
]