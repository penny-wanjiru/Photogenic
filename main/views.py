from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from models import Images, FilteredImage
from rest_framework.permissions import IsAuthenticated

from restriction import CsrfExemptSessionAuthentication
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveDestroyAPIView,
    RetrieveAPIView
)
from .serializers import (
    ImageSerializer,
    FilteredImgSerializer
)


class LoginView(TemplateView):
    """Handles login URL"""
    def get(self, request):
        return render(request, 'login.html')


class MainView(TemplateView):
    """Handles display of dashboard"""
    def get(self, request):
        return render(request, 'app.html')


class ImageListCreateView(ListCreateAPIView):
    """Handle the URL to list and create images"""
    queryset = Images.objects.all()
    serializer_class = ImageSerializer
    authentication_classes = [CsrfExemptSessionAuthentication]
    permission_classes = [IsAuthenticated]

    @csrf_exempt
    def get_queryset(self):
        """Get the user's images"""
        return Images.objects.filter(uploader=self.request.user)

    def perform_create(self, serializer):
        serializer.save(uploader=self.request.user)


class ImageDetailView(RetrieveDestroyAPIView):
    """Handle the URL to list one image"""

    queryset = Images.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [CsrfExemptSessionAuthentication]


class FilteredCreateView(ListCreateAPIView):
    """Handle the URL to list all images"""
    queryset = FilteredImage.objects.all()
    serializer_class = FilteredImgSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Handle url to get the user's filtered images"""
        pk = self.kwargs.get('pk')
        return FilteredImage.objects.filter(originalimage=pk)


class EditedImageView(RetrieveAPIView):
    """Handle the URL to view one edited image"""
    serializer_class = FilteredImgSerializer

    def get_queryset(self):
        """Handle url to get the user's filtered image with id"""
        parent_id = self.kwargs.get('photo_id')
        filter_id = self.kwargs.get('pk')
        return FilteredImage.objects.filter(originalimage=parent_id,
                                            pk=filter_id)
