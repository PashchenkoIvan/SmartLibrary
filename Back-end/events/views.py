from rest_framework.generics import ListCreateAPIView
from .models import Event
from .serializer import EventSerializers

class EventView(ListCreateAPIView):
    serializer_class = EventSerializers
    queryset = Event.objects.all()
        