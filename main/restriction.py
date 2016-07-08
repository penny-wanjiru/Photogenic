from rest_framework.authentication import SessionAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):
    """Disable CSRF on React components."""

    def enforce_csrf(self, request):
        return
