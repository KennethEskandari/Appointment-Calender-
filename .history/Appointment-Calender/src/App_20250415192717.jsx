import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className ="bg-purple-400 p-4 shadow-md text-3xl font-bold center">Appointment Calender</header>
    </div>
   
  )
}

export default App