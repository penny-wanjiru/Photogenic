from .serializers import (
    ImageSerializer,
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveAPIView
)
from django.shortcuts import render
from django.views.generic import TemplateView, View
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication

from models import Image


class login_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    def get(self, request):
        return render(request, 'app.html')


class main_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    def get(self, request):
        return render(request, 'app.html')


class ImageListCreateView(ListCreateAPIView):
    """Handle the URL to list all image"""
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Get the user's images"""
        return Image.objects.filter(uploader=self.request.user)

    def perform_create(self, serializer):
        serializer.save(uploader=self.request.user)


class ImageDetailView(RetrieveAPIView):
    """Handle the URL to list one image"""

    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [BasicAuthentication]
