from django.contrib import admin
from .models import User, StudentProfile, StartupProfile
from django.contrib.admin.models import LogEntry

LogEntry.objects.all().delete()
admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(StartupProfile)
