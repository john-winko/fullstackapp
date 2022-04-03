import Task from "../components/Task";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoAPI from "../api/todoAPI"

function TaskPage(props) {
  // state
  const [task, setTask] = useState(null)

  // router
  const params = useParams()

  // effects
  useEffect(()=> {
    const getTask = async () => {
      const data = await todoAPI.fetchTask(params.taskID)
      if (data){
        setTask(data)
      }
    }
    getTask()
  }, [params.taskID])

  return (
    <div>
      <h2>Task Page</h2>
      <hr/>
      {task && <Task task={task}/>}
    </div>
   );
}

export default TaskPage;