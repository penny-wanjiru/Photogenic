from rest_framework import serializers

from models import Image


class ImageSerializer(serializers.ModelSerializer):
    """Image serializer fields."""

    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Image
        fields = ('id', 'name', 'uploader',
                  'date_created', 'date_updated')
        read_only_fields = ('id', 'date_created', 'date_updated', 'uploader')
