from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Image(models.Model):

    name = models.CharField(max_length=255, blank=True)
    uploader = models.ForeignKey(User, related_name="user")
    image = models.ImageField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return "{}".format(self.name)
