import os
from photogenic import settings
from PIL import Image, ImageFilter


def apply_effect(filter, image):
    original = Image.open(image)
    path = settings.MEDIA_ROOT + '/editedphotos/'
    file_path = path + filter + os.path.basename(image.name)
    if filter == 'blur':
        blurred = original.filter(ImageFilter.BLUR)
        blurred.save(file_path)
    elif filter == 'contour':
        contour = original.filter(ImageFilter.CONTOUR)
        contour.save(file_path)
    elif filter == 'sharpen':
        sharpen = original.filter(ImageFilter.SHARPEN)
        sharpen.save(file_path)
    elif filter == 'smooth':
        smooth = original.filter(ImageFilter.SMOOTH)
        smooth.save(file_path)
    elif filter == 'smooth_more':
        smooth_more = original.filter(ImageFilter.SMOOTH_MORE)
        smooth_more.save(file_path)
    elif filter == 'emboss':
        emboss = original.filter(ImageFilter.EMBOSS)
        emboss.save(file_path)
    elif filter == 'detail':
        detail = original.filter(ImageFilter.DETAIL)
        detail.save(file_path)
    elif filter == 'edge_enhance':
        edge_enhance = original.filter(ImageFilter.EDGE_ENHANCE)
        edge_enhance.save(file_path)
    elif filter == 'edge_enhance_more':
        edge_enhance_more = original.filter(ImageFilter.EDGE_ENHANCE_MORE)
        edge_enhance_more.save(file_path)
    elif filter == 'find_edges':
        find_edges = original.filter(ImageFilter.FIND_EDGES)
        find_edges.save(file_path)
    return file_path[6:]

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