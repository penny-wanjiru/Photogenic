import os
# load and set environment variables from '.env.yml' or '.env.py' files with django_envie
from django_envie.workroom import convertfiletovars
convertfiletovars()


# Ensure development settings are not used in testing and production:
if not os.getenv('CI') and not os.getenv('HEROKU'):
    from base import *

if os.getenv('HEROKU') is not None:
    from production import *
