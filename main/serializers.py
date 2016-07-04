from rest_framework import serializers

from django.contrib.auth.models import User

from models import Image, FilteredImage


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

        fields = ('id', 'first_name', 'email')


class FilteredImgSerializer(serializers.ModelSerializer):
    """Image serializer fields for edited image."""
    # image = serializers.ImageField(use_url=True)

    class Meta:
        model = FilteredImage
        fields = ('id', 'image', 'date_created', 'date_updated')
        read_only_fields = ('id', 'date_created', 'date_updated')


class ImageSerializer(serializers.ModelSerializer):
    """Image serializer fields."""

    class Meta:
        model = Image
        fields = ('id', 'image', 'date_created', 'date_updated')
        read_only_fields = ('id', 'date_created', 'date_updated')
