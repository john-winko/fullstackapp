from django.urls import path
from app.views import TaskListViewSet, TaskViewSet
from rest_framework.routers import DefaultRouter

r = DefaultRouter()
r.register(r"task-list", TaskListViewSet, basename="task-list")
r.register(r"task", TaskViewSet, basename="task")

urlpatterns = r.urls