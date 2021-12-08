import './App.css';

import { useState } from "react";

import Header from './components/Header';
import Tasks from './components/Tasks';

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


  return (
    <div className="container">
      {/* example of props, you can pass this title prop to the header component */}
      <Header title='hello dude' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
