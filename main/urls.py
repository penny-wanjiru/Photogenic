from django.conf.urls import url, include
from django.contrib import admin
from .views import Login_view, Main_view, ImageDetailView, ImageListCreateView, FilteredCreateView, EditedImageView

urlpatterns = [
    url(r'^$', Login_view.as_view(), name='index'),
    url(r'^main/$', Main_view.as_view(), name='main'),
    url(r'^main/images/$', ImageListCreateView.as_view()),
    url(r'^images/(?P<pk>[0-9]+)/$', ImageDetailView.as_view()),
    url(r'^images/(?P<pk>[0-9]+)/edited$', FilteredCreateView.as_view()),
    url(r'^images/(?P<photo_id>[0-9]+)/edited/(?P<pk>[0-9]+)/$',
        EditedImageView.as_view()),
]
