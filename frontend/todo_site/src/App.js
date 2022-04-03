import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import TaskListAllPage from "./pages/TaskListAllPage"
import TaskListPage from "./pages/TaskListPage"
import TaskPage from "./pages/TaskPage"
import ModifyTaskPage from './pages/ModifyTaskPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskListAllPage />} />
        <Route path="/task-list/:listID" element={<TaskListPage />} />
        <Route path="/task-list/:listID/task/:taskID" element={<TaskPage />} />
        <Route path="/task-list/:listID/task/create" element={<ModifyTaskPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
