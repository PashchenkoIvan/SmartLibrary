from rest_framework import serializers

from .models import User

from random import choice
from string import ascii_letters

class AuthSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=False)

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
            'password',
            'phone_number',
            'home_address',
            'work_address',
            'birthday',
            'last_visit',
            'comment',
            'is_disabled_person',

        )
        extra_kwargs = {
            "username": {
                'required': False, 
                "source":"get_user_id"
                        },
            }
    
    def create(self, validated_data):
        validated_data['password'] = self.gen_password()
        password = validated_data.pop("password")
        print(password)
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        
        return instance

    def gen_password(self):
        return ''.join([choice(ascii_letters + "1234567890") for _ in range(7)])