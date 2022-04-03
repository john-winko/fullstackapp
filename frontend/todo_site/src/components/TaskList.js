function TaskList(props) {
  const renderTasks = (tasks) => {
    return tasks && tasks.map((task, index) => <li key={index}>{task}</li>)
    // if (!tasks) return null

    // // single line implemenation
    // // return tasks.map((task, index) => <li key={index}>{task}</li>)
    // return tasks.map((task, index) => {
    //   return (
    //     <li key={index}>{task}</li>
    //   )
    // })
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