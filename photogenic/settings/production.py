from base import *
import dj_database_url

SITE_ID = 1
DEBUG = True

DATABASES = {
    'default': dj_database_url.config()
}
