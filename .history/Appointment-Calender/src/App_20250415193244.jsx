import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className ="h-16 border-2 text-center text-6x1 bg-purple-400">Appointment Calender</header>
    </div>
   
  )
}

export default App