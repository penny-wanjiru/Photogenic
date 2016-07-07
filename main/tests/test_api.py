import os
import tempfile
from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
from django.test import override_settings
from main.models import Images, FilteredImage
from PIL import Image
from django.core.urlresolvers import reverse


def get_temporary_image(temp_file):
        """Generate dummy image file."""
        image = Image.new('RGBA', size=(50, 50), color=(155, 0, 0))
        image.save(temp_file, 'jpeg')
        return temp_file


class MainAPITestCase(APITestCase):

    fixtures = ['user.json']

    def test_user_access_dashboard(self):
        """Test that a logged in user can access their dashboard."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_get_all_images(self):
        """Test for getting all the images"""
        self.client.login(username="administrator", password="administrator")
        response = self.client.get('/main/images/')
        self.assertEqual(response.status_code, 200)

    @override_settings(MEDIA_ROOT=tempfile.gettempdir())
    def test_upload_image_to_api_endpoint(self):
        """ Test a user can upload an image"""
        temp = tempfile.NamedTemporaryFile(suffix=".jpg").name
        test_image = get_temporary_image(temp)
        self.client.login(username="administrator", password="administrator")
        with open(test_image) as image:
            response = self.client.post(
                '/main/images/',
                {'image': image},
                format='multipart'
            )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Images.objects.count(), 1)

    @override_settings(MEDIA_ROOT=tempfile.gettempdir())
    def test_get_filtered_image(self):
        """ Test a user can view all filter for a specific image"""
        temp = tempfile.NamedTemporaryFile(suffix=".jpg").name
        test_image = get_temporary_image(temp)
        self.client.login(username="administrator", password="administrator")
        with open(test_image) as image:
            self.client.post(
                '/main/images/',
                {'image': image},
                format='multipart'
            )
        response = self.client.get('/images/2/edited')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 10)

    @override_settings(MEDIA_ROOT=tempfile.gettempdir())
    def test_delete_an_image(self):
        """Test a user can delete an image"""
        temp = tempfile.NamedTemporaryFile(suffix=".jpg").name
        test_image = get_temporary_image(temp)
        self.client.login(username="administrator", password="administrator")
        with open(test_image) as image:
            self.client.post(
                '/main/images/',
                {'image': image},
                format='multipart'
            )
        delete_response = self.client.delete('/images/1/')
        self.assertEqual(delete_response.status_code, 204)
        self.assertEqual(Images.objects.count(), 0)

