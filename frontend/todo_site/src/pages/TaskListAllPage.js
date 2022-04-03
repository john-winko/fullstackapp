import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function TaskListAllPage(props){
  //states
  const [taskLists, setTaskList] = useState([{id:1, name:"blah"}, {id:2, name:"donuts"}])

  //effects
  //useEffect("function", "dependency array" (optional))
  useEffect(()=>{
    const getTaskLists = async () =>{
      // call API to get task lists
      // get some data back
      // update our internal state value
    }
    getTaskLists()
  }, [])

  // render helpers
  const renderTaskLists= () => {
    let elems = taskLists.map((taskList)=>{
      return (
        <li>
          <Link to={`/task-list/${taskList.id}`}>{taskList.name}</Link>
        </li>
      )
    })
    return elems;
  }

  return (
    <div>
      <ul>
        {renderTaskLists()}
      </ul>
      
    </div>
  )
}

export default TaskListAllPage;