import './App.css';

import { useState } from "react";

import Header from './components/Header';
import Tasks from './components/Tasks';
import { AddTask } from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 5:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Haircut Appointment',
      day: 'Feb 12th at 9:00am',
      reminder: false
    }
  ])

  //add task
  const addTask = (task) => {
    //create task id from random number
    const id = Math.floor(Math.random() * 10000) + 1;
    //copy task and add id to new object
    const newTask = {id, ...task}
    //copy tasks and add new task to group
    setTasks([...tasks, newTask]);
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks!'}
    </div>
  );
}

export default App;
