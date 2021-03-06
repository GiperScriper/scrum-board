"""scrum URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework.authtoken.views import obtain_auth_token

from board.urls import router
from board.views import index, demo, main

from auth.views import auth_login

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/token', obtain_auth_token, name='api-token'),    
    url(r'^api/v1/auth/login', auth_login, name='login'),
    
    
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
    
    #url(r'^api/v1/auth/login', LoginView.as_view(), name='login'),
    url(r'^login/', TemplateView.as_view(template_name='login.html')),
    #url(r'^$', index, name='main'),
    
    # for testing
    url(r'^demo$', demo, name='demo'),
    url(r'^main$', main, name='main'),
]
