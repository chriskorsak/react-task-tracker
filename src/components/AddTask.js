import { useState } from "react"

const AddTask = (props) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    //validate form
    if (!text) {
      alert('Please fill out form!');
      return;
    }

    props.onAdd({text, date, reminder});

    //clear out form after submit
    setText('');
    setDate('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="addTask">Task</label>
        <input type="text" placeholder="Add Task" id="addTask" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className="form-control">
        <label htmlFor="dayTime">Day and Time</label>
        <input type="text" placeholder="Day and Time" id="dayTime" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="setReminder">Reminder</label>
        <input type="checkbox" id="setReminder" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  )
}

export default AddTask;


