from django.shortcuts import render
from app.serializers import TaskListSerializer, TaskSerializer
from app.models import Task, TaskList
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class TaskListViewSet(ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer
    
class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer