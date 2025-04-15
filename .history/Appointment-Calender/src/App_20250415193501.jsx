import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className="h-16 border-2 text-center text-2xl bg-purple-400">Appointment Calender</header>
      <button className="text-2xl text-center">Book Appointment</button>
    </div>
   
  )
}

export default App