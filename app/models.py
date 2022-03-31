from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class TaskList(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="task_lists")
    
    def __str__(self):
        return self.name
    
class Priority(models.Model):
    level = models.CharField(max_length=64)
        
    def __str__(self):
        return self.level
    
class Task(models.Model):
    name = models.CharField(max_length=64)
    priority = models.ForeignKey(Priority, on_delete=models.CASCADE, related_name="tasks")
    due_date = models.DateField()
    list = models.ForeignKey(TaskList, on_delete=models.CASCADE, related_name="tasks")
        
    def __str__(self):
        return self.name
    