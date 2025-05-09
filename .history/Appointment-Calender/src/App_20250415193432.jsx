import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className="h-16 border-2 text-center text-2xl bg-purple-400">Appointment Calender</header>
      <button className="bg-purple-400 text-white p-2 m-2 rounded-md">Book Appointment</button>
    </div>
   
  )
}

export default App