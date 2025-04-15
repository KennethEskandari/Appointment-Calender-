import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar/dist/cjs/Calendar.js'
import { useState } from 'react'
import '/Users/kennetheskandari/Appointment-Calender-/Appointment-Calender/src/index.css'
import './App.css'

function App() {

  return (
    <div>
      <header className ="bg-purple-400 p-4 shadow-md">
        <h1>Appointment Calender</h1>
        </header> 
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Make an Appointment!
        </button>
        <Calendar onChange={setDate} value={date} className="bg-white shadow-md rounded-lg p-4 mt-4" />
  
    </div>
   
  )
}

export default App
