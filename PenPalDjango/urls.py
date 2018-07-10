"""PenPalDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
    curl -X POST -H "Content-Type: application/json" -d '{"username":"admin", "password":"adminadmin"}'  http://127.0.0.1:8000/api-token-auth/
"""
from django.contrib import admin
from django.urls import path, include, re_path, url
from rest_framework import routers
from penpals.api import PenPalViewSet, AddressViewSet, LetterViewSet
from rest_framework.authtoken import views


router = routers.DefaultRouter()
router.register(r'penpals', PenPalViewSet)
router.register(r'addresses', AddressViewSet)
router.register(r'letters', LetterViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
    re_path(r'^api-token-auth/', views.obtain_auth_token),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls'))
]
