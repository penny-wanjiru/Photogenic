from rest_framework import serializers

from models import Image, FilteredImage


class ImageSerializer(serializers.ModelSerializer):
    """Image serializer fields."""

    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Image
        fields = ('id','image', 'date_created', 'date_updated',)
        read_only_fields = ('id', 'date_created', 'date_updated', )


class FilteredImgSerializer(serializers.ModelSerializer):
    """Image serializer fields for edited image."""

    class Meta:
        model = FilteredImage
        fields = ('id','image', 'date_created', 'date_updated',)
        read_only_fields = ('id', 'date_created', 'date_updated', )        
