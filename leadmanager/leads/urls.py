from rest_framework.routers import DefaultRouter

from .views import PageViewSet

router = DefaultRouter()
router.register(r'api/note', PageViewSet, basename='note')
urlpatterns = router.urls
