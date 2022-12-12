from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist

from .models import Visitor
from .serializers import VisitorSerializer

class AuthView(APIView):
    def get(self, req):
        user_id = req.query_params.get('id')
        if user_id:
            try:
                user_obj = Visitor.objects.get(id=user_id)
                serializer = VisitorSerializer(data=user_obj)
                return Response(serializer.data)
            except ObjectDoesNotExist:
                return Response(f"Error: User with id {user_id} not found")
            