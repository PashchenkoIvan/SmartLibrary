from rest_framework import serializers

from .models import User

class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        
        fields = (
            "id",
            'username',
            'full_name',
            'email',
            'is_active',
            'is_staff',
            'created_at',
            'updated_at',
            'password'
        )
        extra_kwargs = {"username": {'required': False, "source":"get_user_id"},}
    
    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        
        return instance