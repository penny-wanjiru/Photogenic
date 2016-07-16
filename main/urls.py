from django.conf.urls import url, include
from django.contrib import admin
from .views import LoginView, MainView, ImageDetailView, ImageListCreateView, FilteredCreateView, EditedImageView

urlpatterns = [
    url(r'^$', LoginView.as_view(), name='index'),
    url(r'^main/$', MainView.as_view(), name='main'),
    url(r'^main/images/$', ImageListCreateView.as_view()),
    url(r'^images/(?P<pk>[0-9]+)/$', ImageDetailView.as_view()),
    url(r'^images/(?P<pk>[0-9]+)/edited$', FilteredCreateView.as_view()),
    url(r'^images/(?P<photo_id>[0-9]+)/edited/(?P<pk>[0-9]+)/$',
        EditedImageView.as_view()),
]
