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
    // console.log(event)
    let taskObj = {
      name: event.target.elements.name.value,
      list: params.listID,
      due_date: event.target.elements.due_date.value,
      priority: event.target.elements.priority.value,
    }
    console.log("Task obj", taskObj)
    const data = await todoAPI.addTask(taskObj)
    if (data){
      navigate(`/task-list/${params.listID}`)
    }
  }

  return ( 
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2>Add Task Page</h2>
        <hr/>
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
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div> 
  );
}

export default ModifyTaskPage;