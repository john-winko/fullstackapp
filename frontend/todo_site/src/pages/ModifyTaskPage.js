import {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

//api
import todoAPI from '../api/todoAPI'

function ModifyTaskPage(props) {
  //states
  const [task, setTask] = useState()

  // router props
  const params = useParams()
  const navigate = useNavigate()
  
  // handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    let taskObj = {
      name: event.target.element[0].value,
      list: params.listID,
      due_date: event.target.element[1].value,
      priority: event.target.element[2].value,
    }
    const data = await todoAPI.addTask(taskObj)
    if (data){
      navigate(`/task-list/${params.listID}`)
    }
  }

  return ( 
    <div>
      <form onSubmit={handleFormSubmit}><br/>
        <label>Name: </label>
        <input name="name" placeholder="task name" /><br/>
        <label>Due Date: </label>
        <input name='due_date' /><br/>
        <label>Priority: </label>
        {/* this could be synced with backend so its not created manually */}
        <select name='priority' placeholder='priority' >
          <option value="1">Critical</option>
          <option value="2">High</option>
          <option value="3">Medium</option>
          <option value="4">Low</option>
        </select>
      </form>
    </div> 
  );
}

export default ModifyTaskPage;