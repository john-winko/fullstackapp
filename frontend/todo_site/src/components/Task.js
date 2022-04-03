
function Task(props) {

  const renderTask = () => {
    return (
      <div>
        <h3>Task: {props.task.name}</h3>
        <h6>Task List: {props.task.list} </h6>
        <p>Priority: {props.task.priority}</p>
        <p>Due Date: {props.task.due_date}</p>
      </div>
    )
  }
  return ( 
    <div>
      {props.task && renderTask()}
    </div>
   );
}

export default Task;