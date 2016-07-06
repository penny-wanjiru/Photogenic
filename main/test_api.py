from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
import os


class MainAPITestCase(APITestCase):
    """defines tests for the api
    """
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create(
            username='pennyuser',
            password='password')
   

    def test_api_get_images(self):
        """test for getting images
        """
        self.client.login(username="pennyuser", password="password")
        response = self.client.get('/main/images/')
        self.assertEqual(response.status_code, 200)

    