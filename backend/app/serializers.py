from rest_framework.serializers import ModelSerializer, StringRelatedField
from app.models import TaskList, Task#, Priority

class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "name", "due_date", "list", "priority"]
        
class TaskListSerializer(ModelSerializer):    
    class Meta:
        model = TaskList
        fields = ["id", "name", "description", "user", "tasks"]
    # Just returns the __str__ of item
    # tasks = StringRelatedField(many=True)
    tasks = TaskSerializer(many=True)
        