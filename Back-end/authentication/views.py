from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist

from .serializers import AuthSerializer
from .models import User

class AuthView(APIView):
    permission_classes = [permissions.IsAdminUser]
    def get(self, req):
        user_id = req.query_params.get('user_id')
        if user_id:
            try:
                user = User.objects.get(id=user_id)
                serializer = AuthSerializer(user)
            except ObjectDoesNotExist:
                return Response(f"Error: User with id: {user_id} doesn't exist")
        else:
            users = User.objects.all()
            serializer = AuthSerializer(users, many=True)
        return Response(serializer.data)
        
    def post(self, req):
        serializer = AuthSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    
    def delete(self, req, pk):
        try:
            user = User.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response(f"Error: User with id: {pk} does not exist")
        user.delete()
        return Response({'message': f"Item has been successfully deleted"})
    
    def put(self, req, pk):
        try:
            user = User.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response(f"Error: User with id: {pk} does not exist")
        serializer = AuthSerializer(user, data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  