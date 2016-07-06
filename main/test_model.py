
# from django.contrib.auth.models import User

# from PIL import Image
# import tempfile
# from django.test import TestCase
# from django.test import override_settings
# from .models import Images, FilteredImage

# def get_temporary_image(temp_file):
#     size = (200, 200)
#     color = (255, 0, 0, 0)
#     image = Image.new("RGBA", size, color)
#     image.save(temp_file, 'jpeg')
#     return temp_file

# class PictureDummyTest(TestCase):

#     @override_settings(MEDIA_ROOT=tempfile.gettempdir())
#     def test_dummy_test(self):
#         temp_file = tempfile.NamedTemporaryFile()
#         test_image = get_temporary_image(temp_file)
#         image = Images.objects.create(image=test_image.name)
#         print "It Worked!, ", image.image
#         self.assertEqual(len(Images.objects.all()), 1)
