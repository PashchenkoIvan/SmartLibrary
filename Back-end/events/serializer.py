from rest_framework import serializers

from .models import Event

class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
                "name",
                "description",
                "date"
                 )