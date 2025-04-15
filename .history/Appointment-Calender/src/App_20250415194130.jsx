import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className="h-16 border-2 text-center text-2xl bg-purple-400">Appointment Calender</header>
      <button className="text-2xl mx-auto block border-5 mt-8 bg-purple-400 rounded-lg px-4 py-1">Book Appointment</button>

      <div className="mt-8 mx-auto border-2 rounded-lg" style={{ height: '200px', width: 'fit-content' }}></div>
      <Calendar onChange={setDate} value={date} className="mx-auto mt-8 border-2 rounded-lg" />
    </div>
   
  )
}

export default App