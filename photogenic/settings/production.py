from base import *
import dj_database_url


DEBUG = True

DATABASES = {
    'default': dj_database_url.config()
}
