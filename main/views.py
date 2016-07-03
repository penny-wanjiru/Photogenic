from .serializers import (
    ImageSerializer,
    FilteredImgSerializer
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveDestroyAPIView,
    RetrieveUpdateAPIView
)
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from django.views.decorators.csrf import csrf_exempt

from restriction import CsrfExemptSessionAuthentication
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
    authentication_classes = [CsrfExemptSessionAuthentication]
    permission_classes = [IsAuthenticated]

    @csrf_exempt
    def get_queryset(self):
        """Get the user's images"""
        return Image.objects.filter(uploader=self.request.user)

    def perform_create(self, serializer):
        serializer.save()


class FilteredCreateView(ListCreateAPIView):
    """Handle the URL to list all images"""
    queryset = FilteredImage.objects.all()
    serializer_class = FilteredImgSerializer
    # authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """"Return previews as per original photo id."""
        pk = self.kwargs.get('pk')
        return FilteredImage.objects.filter(originalimage=pk)


class EditedImageUpdateView(RetrieveUpdateAPIView):

    serializer_class = FilteredImgSerializer

    def get_queryset(self):
        """Return previews as per original photo id."""
        parent_id = self.kwargs.get('photo_id')
        filter_id = self.kwargs.get('pk')
        return FilteredImage.objects.filter(originalimage=parent_id, pk=filter_id)        


class ImageDetailView(RetrieveDestroyAPIView):
    """Handle the URL to list one image"""

    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [IsAuthenticated]
    # authentication_classes = [BasicAuthentication]
