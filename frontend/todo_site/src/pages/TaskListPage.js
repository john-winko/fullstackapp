import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
//api
import todoAPI from "../api/todoAPI"

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
  const renderTasks = (tasks) => {
    if (!tasks) return null

    // single line implemenation
    // return tasks.map((task, index) => <li key={index}>{task}</li>)
    return tasks.map((task, index) => {
      return (
        <li key={index}>{task}</li>
      )
    })
  }

  const renderTaskLists= () => {
    if (!taskList)
      return null
    
    return (
      <div>
        <h3>Task List: {taskList.name}</h3>
        <h6>Owner: {taskList.user} </h6>
        <p>Description: {taskList.description}</p>
        <ul>
          {renderTasks(taskList.tasks)}
        </ul>
      </div>
    )    
  }

  return ( 
    <div>
      <h2>Task Page</h2>
      <hr/>
      {renderTaskLists()}
    </div>
   );
}

export default TaskListPage;