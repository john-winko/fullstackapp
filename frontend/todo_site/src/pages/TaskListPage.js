import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//api
import todoAPI from "../api/todoAPI"
import TaskList from '../components/TaskList'

function TaskListPage(props) {
  //states
  const [taskList, setTaskList] = useState([])

  // router props
  const params = useParams()

  //effects
  //useEffect("function", "dependency array" (optional))
  useEffect(()=>{
    const getTaskLists = async () =>{      
      // call API to get task lists
      // get some data back
      const data = await todoAPI.fetchTaskList(params.listID)
      console.log("Returned task list: ", data)
      if (data){
        // update our internal state value
        setTaskList(data)
      }
    } 
    getTaskLists()
  },[params.listID])

  // render helpers

  return ( 
    <div>
      <h2>Task Page</h2>
      <hr/>
      {taskList && <TaskList taskList={taskList} />}
    </div>
   );
}

export default TaskListPage;