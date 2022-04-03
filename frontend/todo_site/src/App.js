import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import TaskListAllPage from "./pages/TaskListAllPage"
import TaskListPage from "./pages/TaskListPage"
import TaskPage from "./pages/TaskPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskListAllPage />} />
        <Route path="/task-list/:listID" element={<TaskListPage />} />
        <Route path="/task-list/:listID/task/:taskID" element={<TaskPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
