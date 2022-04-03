function TaskList(props) {
  const renderTasks = (tasks) => {
    return tasks && tasks.map((task, index) => <li key={index}>{task.name}</li>)
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