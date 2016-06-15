from django.conf.urls import url, include
from django.contrib import admin
from .views import login_view, main_view
from .views import ImageDetailView, ImageListCreateView

urlpatterns = [
    url(r'^$', login_view.as_view(), name='index'),
    url(r'main/^$', main_view.as_view(), name='main'),
    url(r'^images/$', ImageListCreateView.as_view()),
    url(r'^image/(?P<pk>[0-9]+)/$', ImageDetailView.as_view()),
]
