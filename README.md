# Photogenic app

  This app allows you to upload images, add filters to them and share on facebook.It consists of a django Rest API and a frontend built with react. 

# Dependencies:
###Backend dependencies:
    Django - The backbone upon which this REST API is built upon. It's a Python web framework that features models, views, url routes and user management among many other features.

    Django REST framework - This is a powerful and flexible toolkit for building browsable REST APIs. It includes support for model serialization, permissions (default and custom) and viewsets among other features.

    Pillow - Python Image Manipulation Library
###Frontend dependencies:
 
    Materialize CSS - The front end framework from which all the elements and controls on the front end have been created.

    React - React makes it painless to create interactive UIs.

# Features:
*  A user can log in with facebook.
*  A user is authenticated.
*  A user can Upload images.
*  A user can apply filters to the images.
*  A user download the edited image.
*  A user can logout.

## Usage:

* Clone the repo: git@github.com:andela-pwanjiru/Photogenic.git

* Install requirements.
 `pip install -r requirements.txt`

* Install the project's database. PostgreSQL was used for this checkpoint.

* Install frontend dependencies as described in the package.json file.
* After installation, create a database on PostgreSQL for this app.
* Perform database migrations.
    `python manage.py makemigrations `
    `python manage.py migrate `

* Run the application
 `python manage.py runserver`


## Testing
To run tests:
`python manage.py test`
