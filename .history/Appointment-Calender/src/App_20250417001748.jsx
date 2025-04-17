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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointment from "./Components/Appointment";

function CalendarApp() {
  const [eventsService] = useState(() => createEventsServicePlugin());

  const calendarApp = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2023-10-01',
        end: '2023-10-02',
      },
    ],
    plugins: [eventsService],
  });

  useEffect(() => {
    eventsService.getAll();
  }, [eventsService]);

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4">
          <Routes>
            {/* Default Route */}
            <Route
              path="/"
              element={
                <div>
                  <header className="bg-red-400 flex items-center justify-center p-4">
                    <h1 className="text-2xl text-black">
                      City Sound Installation Calendar
                    </h1>
                  </header>
                  <ScheduleXCalendar calendarApp={calendarApp} />
                </div>
              }
            />

            {/* Appointment Route */}
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default CalendarApp;
