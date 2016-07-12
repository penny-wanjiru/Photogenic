from django.contrib.auth.models import User
from models import Images, FilteredImage
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """User serializer fields."""
    class Meta:
        model = User
        fields = ('id', 'first_name', 'email')


class FilteredImgSerializer(serializers.ModelSerializer):
    """Image serializer fields for edited image."""

    class Meta:
        model = FilteredImage
        fields = ('id', 'image', 'date_created', 'date_updated')
        read_only_fields = ('id', 'date_created', 'date_updated')


class ImageSerializer(serializers.ModelSerializer):
    """Image serializer fields."""

    class Meta:
        model = Images
        fields = ('id', 'image', 'date_created', 'date_updated')
        read_only_fields = ('id', 'date_created', 'date_updated')
