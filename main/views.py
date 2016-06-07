from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class login_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    # display blank form
    def get(self, request):
        return render(request, 'signup.html')
