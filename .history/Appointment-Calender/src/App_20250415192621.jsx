import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className ="bg-purple-400 p-4 shadow-md"/>
      <h1 className="text-3xl font-bold text-center mt-4">Appointment Calendar</h1>
    </div>
   
  )
}

export default App