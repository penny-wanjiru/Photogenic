from .serializers import (
    ImageSerializer,
)
from rest_framework.generics import (
    ListCreateAPIView,
)
from django.shortcuts import render
from django.views.generic import TemplateView, View
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from models import Image


class login_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    # display blank form
    def get(self, request):
        return render(request, 'app.html')

class main_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    # display blank form
    def get(self, request):
        return render(request, 'app.html')


class ImageListView(ListCreateAPIView):
    """Handle the URL to list all photos"""
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Get the user's images"""
        return Image.objects.filter(uploader=self.request.user)

    def perform_create(self, serializer):
        serializer.save(uploader=self.request.user)
