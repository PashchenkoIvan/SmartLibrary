from rest_framework import serializers
from .models import Visitor

class VisitorSerializer(serializers.ModelSerializer):
    fields = (
        'id'
        "full_name",
        "email",
        "full_address",
        "birthday",
        "last_visit",
        "comment",
        "password",
        "is_disabled_person"
    )