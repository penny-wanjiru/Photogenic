from rest_framework import serializers

from models import Image


class ImageSerializer(serializers.ModelSerializer):
    """Image serializer fields."""

    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Image
        fields = ('id','image', 'date_created', 'date_updated', 'uploader',)
        read_only_fields = ('id', 'date_created', 'date_updated', 'uploader')
