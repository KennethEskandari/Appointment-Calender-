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
    {/* Sidebar */}
    <div className="flex h-screen">
      <div className="w-1/4 bg-purple-200 p-4">
        <Sidebar />
      </div>
    
      {/* Calendar App */}
      <div className="w-3/4 bg-purple-200 p-4">

          <header className="bg-red-400 items-center justify-center">
            <h1 className="text-2xl text-black">City Sound Installation Calendar</h1>
          </header>
          <ScheduleXCalendar calendarApp={calendarApp} />
        </div>
      </div>
    </div>

);
}
export default CalendarApp;
