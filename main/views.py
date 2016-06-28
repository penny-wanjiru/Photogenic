from .serializers import (
    ImageSerializer,
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveDestroyAPIView
)
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication

from models import Image, FilteredImage


class login_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    def get(self, request):
        return render(request, 'login.html')


class main_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    def get(self, request):
        return render(request, 'app.html')


class ImageListCreateView(ListCreateAPIView):
    """Handle the URL to list all images"""
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Get the user's images"""
        return Image.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class FilteredCreateView(ListCreateAPIView):
    """Handle the URL to list all images"""
    queryset = FilteredImage.objects.all()
    serializer_class = FilteredImgSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """"Return previews as per original photo id."""
        pk = self.kwargs.get('pk')
        return FilteredImage.objects.filter(originalimage=pk)

    def perform_create(self, serializer):
        serializer.save()


class ImageDetailView(RetrieveDestroyAPIView):
    """Handle the URL to list one image"""

    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [BasicAuthentication]
