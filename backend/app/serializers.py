from rest_framework.serializers import ModelSerializer
from app.models import TaskList, Task#, Priority

class TaskListSerializer(ModelSerializer):
    class Meta:
        model = TaskList
        fields = ["id", "name", "description", "user", "tasks"]
        
class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "name", "due_date", "list", "priority"]