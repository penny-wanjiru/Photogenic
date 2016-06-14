from django.shortcuts import render
from django.views.generic import TemplateView, View


class login_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    # display blank form
    def get(self, request):
        return render(request, 'app.html')

class main_view(TemplateView):
    """Handles the signing in of a user
       methods:"GET","POST"
    """
    # display blank form
    def get(self, request):
        return render(request, 'app.html')
# class logout(View):
#     auth_logout(request)
#     return redirect('/')        
