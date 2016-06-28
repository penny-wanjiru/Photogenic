from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Image(models.Model):

    # uploader = models.ForeignKey(User, related_name="user")
    image = models.ImageField(upload_to='pics/')
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return "{}".format(self.name)


class FilteredImage(models.Model):
    """Base model for photos that have been edited and the preview."""

    image = models.TextField(max_length=250)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    originalimage = models.ForeignKey(Image)
