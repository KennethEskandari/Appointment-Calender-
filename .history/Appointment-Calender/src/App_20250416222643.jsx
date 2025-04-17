import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
}
from "@schedule-x/calendar";
import { useEffect, useState } from "react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import '@schedule-x/theme-default/dist/index.css';
import Sidebar from "./Components/Sidebar";

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  const handleMakeAppointment = () => {
    console.log('Make Appointment');
  }

  const calendarApp = useCalendarApp({


    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(), 
      createViewMonthAgenda()
    ],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2023-10-01',
        end: '2023-10-02',
      }
    ],
    plugins: [eventsService]
  })

  useEffect(() => {
    eventsService.getAll()
  }, [eventsService])

  return (
    <div>
      <div className = 'flex'>
        <Sidebar />
        </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleMakeAppointment}
        >
          Make Appointment
        </button>
      </div>


        <div className="min-h-[80vh] w-[80vw] bg-white shadow-lg rounded-lg p-6">
          <header className="bg-purple-400 h-16 flex items-center justify-center">
            <h1 className="text-2xl text-black">Schedule An Appointment</h1>
          </header>
          <ScheduleXCalendar calendarApp={calendarApp} />
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
