from django.contrib import admin

# Register your models here.
from app.models import *

admin.site.register(TaskList)
admin.site.register(Task)
admin.site.register(Priority)