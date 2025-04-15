import { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <header className="h-16 border-2 text-center text-2xl bg-purple-400">Appointment Calender</header>
    </div>
    <button className="bg-purple-400 text-white font-bold py-2 px-4 rounded">
   
  )
}

export default App