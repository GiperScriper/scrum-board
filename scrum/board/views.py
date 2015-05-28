#from django.shortcuts import render
from rest_framework import authentication, permissions, viewsets, filters

from .models import Sprint, Task
from .serializers import SprintSerializer, TaskSerializer, UserSerializer

from django.contrib.auth import get_user_model

User = get_user_model()


class DefaultsMixin(object):
	"""
		Default settings for view authentication, permissions,
		filtering and pagination.
	"""

	authentication_classes = (
		authentication.BasicAuthentication,
		authentication.TokenAuthentication,
	)

	permission_classes = (
		permissions.IsAuthenticated,
	)

	paginate_by = 15
	paginate_by_param = 'page_size'
	max_paginate_by = 50

	filter_backends = (
		filters.DjangoFilterBackend,
		filters.SearchFilter,
		filters.OrderingFilter,
	)


class SprintViewSet(DefaultsMixin, viewsets.ModelViewSet):
	"""	API endpoint for listing and creating sprints. """

	queryset = Sprint.objects.order_by('end')
	serializer_class = SprintSerializer

	search_fields = ('name',)
	ordering_fields = ('end', 'name',)


class TaskViewSet(DefaultsMixin, viewsets.ModelViewSet):
	"""	API endpoint for listing nad creating tasks. """

	queryset = Task.objects.all()
	serializer_class = TaskSerializer


class UserViewSet(DefaultsMixin, viewsets.ReadOnlyModelViewSet):
	"""	API endpoint for listing users.	"""

	lookup_field = User.USERNAME_FIELD
	lookup_url_kwarg = User.USERNAME_FIELD
	queryset = User.objects.order_by(User.USERNAME_FIELD)
	serializer_class = UserSerializer


