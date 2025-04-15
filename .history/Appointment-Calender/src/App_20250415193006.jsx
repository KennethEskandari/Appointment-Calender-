import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className ="border-1 text-center bg-purple-400">Appointment Calender</header>
    </div>
   
  )
}

export default App