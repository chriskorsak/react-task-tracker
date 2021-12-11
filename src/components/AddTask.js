import { useState } from "react"

export const AddTask = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className='add-form'>
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
        <input type="checkbox" id="setReminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  )
}


