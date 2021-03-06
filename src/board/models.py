from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

class Project(models.Model):
	""" Project.. """

	name = models.CharField(max_length=100, blank=False)
	description = models.TextField(blank=True, default='')
	start_date = models.DateField(auto_now_add=True)
	active = models.BooleanField(default=True)


class Sprint(models.Model):
	""" Development iteration period """

	name = models.CharField(max_length=100, blank=True, default='')
	description = models.TextField(blank=True, default='')
	end = models.DateField(unique=True)

	def __str__(self):
		return self.name or _('Sprint ending {0}').format(self.end)


class Task(models.Model):
	""" Single Task for the sprint """

	STATUS_TODO = 1
	STATUS_IN_PROGRESS = 2
	STATUS_TESTING = 3
	STATUS_DONE = 4

	STATUS_CHOICES  = (
		(STATUS_TODO, _('Not Started')),
		(STATUS_IN_PROGRESS, _('In Progress')),
		(STATUS_TESTING, _('Testing')),
		(STATUS_DONE, _('Done')),
	)

	name = models.CharField(max_length=100)
	description = models.TextField(blank=True, default='')
	sprint = models.ForeignKey(Sprint, blank=True, null=True)
	status = models.SmallIntegerField(choices=STATUS_CHOICES, default=STATUS_TODO)
	order = models.SmallIntegerField(default=0)
	assigned = models.ForeignKey(User, null=True, blank=True)
	started = models.DateField(blank=True, null=True)
	due = models.DateField(blank=True, null=True)
	completed = models.DateField(blank=True, null=True)	

	def __str__(self):
		return self.name



