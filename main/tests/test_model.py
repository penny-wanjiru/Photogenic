from django.test import TestCase
from PIL import Image
from main.models import Images, FilteredImage
from django.test import override_settings
import tempfile
from django.contrib.auth.models import User

def get_temporary_image(temp_file):
    size = (200, 200)
    color = (255, 0, 0, 0)
    image = Image.new("RGBA", size, color)
    image.save(temp_file, 'jpeg')
    return temp_file

class ModelTests(TestCase):

    def setUp(self):
        self.user = User.objects.create(
            username='pennyuser',
            password='password')
        self.uploader = User.objects.filter(id=self.user.id).first()

    def tearDown(self):
        User.objects.all().delete()
        Images.objects.all().delete()
        FilteredImage.objects.all().delete()

    def test_user_creation(self):
        """Test creation of user"""
        self.assertEqual(self.user.get_username(), 'pennyuser')
        self.assertIsInstance(self.user, User)

    @override_settings(MEDIA_ROOT=tempfile.gettempdir())
    def test_dummy_test(self):
        """Test image upload and creation of filters"""
        temp = tempfile.NamedTemporaryFile(suffix=".jpg").name
        test_image = get_temporary_image(temp)
        images = Images.objects.create(image=test_image, uploader=self.uploader)
        search = Images.objects.filter(image=test_image).first()
        self.assertEqual(len(Images.objects.all()), 1)
        self.assertEqual(len(FilteredImage.objects.all()), 10)
        self.assertIn(test_image, search.image.name)