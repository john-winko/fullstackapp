import { useNavigate, useParams } from "react-router-dom";
import todoAPI from "../api/todoAPI"

function DeleteTaskPage(props) {
  // params
  const params = useParams()
  const navigate = useNavigate()

  const deleteTask = async () => {
    const data = await todoAPI.deleteTask(params.taskID)
    if (data){
      navigate(`/task-list/${params.listID}/`)
    }
  }

  return ( 
    <div>
      Are you sure you want to delete this task?
      <button onClick={deleteTask}>Yes</button>
      <button>No</button>
    </div>
   );
}

export default DeleteTaskPage;