

const tryCatchFetch = async (url, init=null) => {
  try{
    const response = await fetch(url, init)
    if (response.ok){
      // delete calls do not return a json object, you get 204 from successful delete
      if (response.status !== 204)
        return await response.json()
      else
        return response
    }
    else{
      throw new Error(`Bad response: ${response.status} ${response.statusText}`)
    }
  }
  catch (e) {
    console.log(e)
    return null
  }

}

const BASE_URL = "http://127.0.0.1:8000/api/"

const fetchAllTaskLists = async () => {
  let url = BASE_URL + "task-list/"
  return await tryCatchFetch(url)
}

const fetchTask = async (id) => {
  let url = BASE_URL + `task/${id}`
  return await tryCatchFetch(url)
}

const fetchTaskList = async (id) => {
  let url = BASE_URL + `task-list/${id}`
  return await tryCatchFetch(url)
}

const addTask = async (taskObj) => {
  let url = BASE_URL + `task/`
  const paramsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObj)
  }
  console.log("params", paramsObj)
  return await tryCatchFetch(url, paramsObj)
}


const deleteTask = async (id) => {
  let url = BASE_URL + `task/${id}/`
  const paramsObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  }
  console.log("params", paramsObj)
  return await tryCatchFetch(url, paramsObj)
}

const exportStuff = {
  fetchAllTaskLists,
  fetchTaskList,
  addTask, 
  fetchTask,
  deleteTask
}

export default exportStuff;