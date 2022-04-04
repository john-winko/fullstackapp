from rest_framework.serializers import ModelSerializer, StringRelatedField
from app.models import TaskList, Task, Priority

        
class TaskListSummarySerializer:
    class Meta:
        model = TaskList
        fields = ["id", "name"]
        
class PrioritySerializer:
    class Meta:
        model = Priority
        fields = ["id", "level"]    
        
class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "name", "due_date", "list", "priority"]
    list = TaskListSummarySerializer()
    # priority = StringRelatedField()
    priority = PrioritySerializer()
        
class TaskListSerializer(ModelSerializer):    
    class Meta:
        model = TaskList
        fields = ["id", "name", "description", "user", "tasks"]
    # Just returns the __str__ of item
    # tasks = StringRelatedField(many=True)
    tasks = TaskSerializer(many=True)
