from django.conf.urls import url, include
from django.contrib import admin
from .views import login_view, main_view

urlpatterns = [
    url(r'^$', login_view.as_view(), name='index'),
    url(r'main/^$', main_view.as_view(), name='main'),
]
