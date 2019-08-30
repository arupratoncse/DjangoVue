from rest_framework.routers import DefaultRouter

from .views import PageViewSet

router = DefaultRouter()
router.register(r'api/note', PageViewSet, base_name='note')
urlpatterns = router.urls
