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

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  const makeAppointment = () => (
    {
    console.log('Appointment made')
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">ß
        <div className="min-h-[80vh] w-[80vw] bg-white shadow-lg rounded-lg p-6">
        <header className="bg-purple-400 h-16">
        <h1 className ="text-2xl text-black text-center">Schedule An Appointment</h1>
        </header>
        <ScheduleXCalendar calendarApp={calendarApp} />
      </div>
    </div>
  );
}

export default CalendarApp;
