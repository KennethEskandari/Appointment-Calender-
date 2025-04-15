import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className ="border-1 text-center">Appointment Calender</header>
    </div>
   
  )
}

export default App