from django.contrib.auth.models import User
from django.test import TestCase, Client
from main.models import Images, FilteredImage
from django.core.urlresolvers import reverse


class TestMainView(TestCase):

    def setUp(self):
        self.client = Client()
        self.user = User.objects.create(
            username='pennyuser',
            password='password')

    def test_user_access_dashboard(self):
        """Test that a user access to dashboard when logged in"""
        self.client.login(username="administrator", password="administrator")
        response = self.client.get('/main/')
        self.assertEqual(response.status_code, 200)
