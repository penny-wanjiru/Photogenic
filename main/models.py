from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from filters import apply_effect


filters = ['blur', 'contour', 'sharpen', 'smooth', 'smooth_more',
           'emboss', 'detail', 'edge_enhance',
           'edge_enhance_more', 'find_edges']


class Image(models.Model):

    # uploader = models.ForeignKey(User, related_name="user")
    image = models.ImageField(upload_to='pics/')
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)


class FilteredImage(models.Model):
    """Base model for photos that have been edited and the preview."""

    image = models.ImageField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    originalimage = models.ForeignKey(Image, related_name="filters")


@receiver(post_save, sender=Image)
def main_effect(sender, instance, **kwargs):
    image = instance.image
    for filter in filters:
        applied = apply_effect(filter, image)
        edited=FilteredImage.objects.create(image=applied, originalimage=instance)
        edited.save()
