import { Link } from "react-router-dom";

function TaskList(props) {
  const renderTasks = (tasks) => {
    return tasks && tasks.map((task, index) => {
      return (        
        <li key={index}>
          <Link to={`/task-list/${task.list}/task/${task.id}`}>{task.name}</Link>
        </li>
    )})    
  }

  return ( 
    <div>
      <h3>Task List: {props.taskList.name}</h3>
      <h6>Owner: {props.taskList.user} </h6>
      <p>Description: {props.taskList.description}</p>
      <ul>
        {renderTasks(props.taskList.tasks)}
    </ul>
  </div>
  );
}

export default TaskList;