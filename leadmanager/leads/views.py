from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from .models import Page
from .serializers import PageSerializer


class PageViewSet(ModelViewSet):
    """Page API
    """
    serializer_class = PageSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Page.objects.filter(
            user=self.request.user,
        ).order_by('-updated_at', '-id')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
