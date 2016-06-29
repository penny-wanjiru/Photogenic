import os
from photogenic import settings
from PIL import Image, ImageFilter


def apply_effect(filter, image):
    print image
    original = Image.open(image)
    path = settings.MEDIA_ROOT + '/editedphotos/'
    file_path = path + filter + os.path.basename(image.name)
    if filter == 'blur':
        blurred = original.filter(ImageFilter.BLUR)
        blurred.save(file_path)
        print file_path
        return file_path
    elif filter == 'contour':
        contour = original.filter(ImageFilter.CONTOUR)
        contour.save(file_path)
        print file_path
        return file_path    

# for filter in effects_list:

# try:

#     # Load an image from the hard drive
#     original = Image.open(image)

#     # Blur the image
#     blurred = original.filter(ImageFilter.CONTOUR)
    
#     # Display both images
#     # original.show()
#     blurred.show()
    

#     # save the new image
#     blurred.save("blurred.png")


# except:
#     print "Unable to load image"