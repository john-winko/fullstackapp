import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

//api
import todoAPI from "../api/todoAPI"

function TaskListAllPage(props){
  //states
  const [taskLists, setTaskList] = useState([])

  //effects
  //useEffect("function", "dependency array" (optional))
  useEffect(()=>{
    const getTaskLists = async () =>{      
      // call API to get task lists
      // get some data back
      const data = await todoAPI.fetchAllTaskLists()
      console.log("Returned data: ", data)
      if (data){
        // update our internal state value
        setTaskList(data)
      }
    } 
    getTaskLists()
  }, [])

  // render helpers
  const renderTaskLists= () => {
    let elems = taskLists.map((taskList, index)=>{
      return (
        <li key={index}>
          <Link to={`/task-list/${taskList.id}`}>{taskList.name}</Link>
        </li>
      )
    })
    return elems;
  }

  return (
    <div>
      <h2>All Taks Lists</h2>
      <hr/>
      <ul>
        {renderTaskLists()}
      </ul>
      
    </div>
  )
}

export default TaskListAllPage;