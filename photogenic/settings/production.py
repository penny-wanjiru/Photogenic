from .base import *
import dj_database_url
import os


DEBUG = True

DATABASES = {
    'default': dj_database_url.config()
}

