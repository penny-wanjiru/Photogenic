from django.shortcuts import render
from django.views.generic import TemplateView


class login_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    # display blank form
    def get(self, request):
        return render(request, 'index.html')
