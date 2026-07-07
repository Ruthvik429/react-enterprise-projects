import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import './App.css';

function App(){

const [tasks, setTasks] = useLocalStorage('tasks', []);
const [filterCategory, setFilterCategory] = useState('All');
const [filterStatus, setFilterStatus] = useState('All');

function addTasks(newTask){
  const taskWithId = {
    id: Date.now(),
    completed: false,
    ...newTask
  };
  setTasks([taskWithId,...tasks]);
};
function deleteTasks(id){
  setTasks(tasks.filter((task)=>task.id !== id));
};
function toggleTask(id){
  setTasks(
    tasks.map((task)=>
    task.id == id ? {...task, completed: !task.completed} : task)
  );
};

const visibleTask = tasks.filter((task)=>{
  const categoryMatch = filterCategory === 'All' || task.category === filterCategory;

  const statusMatch = filterStatus === 'All' || 
  (filterStatus ==='Completed' && task.completed) ||
  (filterStatus === 'Pending' && !task.complted);

  return categoryMatch && statusMatch;
});

const pendingCount = tasks.filter((task)=> !task.completed).length;
const completedCount = tasks.filter((task)=> task.completed).length;

return(
  <div className="container py-4">
    <h1 className="mb-4">📋 Task Tracker</h1>

    <TaskForm onAddTask={addTasks}/>

    <TaskFilters 
    filterCategory={filterCategory}
    setFilterCategory={setFilterCategory}
    filterStatus={filterStatus}
    setFilterStatus={setFilterStatus}/>

    <TaskStats pendingCount={pendingCount} completedCount={completedCount}/>

    <TaskList
    tasks={visibleTask}
    onToggleTask={toggleTask}
    onDeleteTask={deleteTasks}/>

    

  </div>
)

}
export default App;