from PIL import Image, ImageFilter


try:
    # Load an image from the hard drive
    original = Image.open("../media/pics/160223Andeladies014.jpg")

    # Blur the image
    blurred = original.filter(ImageFilter.CONTOUR)

    # Display both images
    original.show()
    blurred.show()

    # save the new image
    blurred.save("blurred.png")

except:
    print "Unable to load image"