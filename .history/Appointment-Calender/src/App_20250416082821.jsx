import {useCalendarApp, ScheduleXCalendar} from "@schedule-x/react";
import {createViewDay, createViewMonthGrid, createViewMonthAgenda, createViewWeek} from "@schedule-x/calendar";
import {createEventsServicePlugin} from "@schedule-x/events-service";
import { useEffect, useState } from "react";

export default function CalendarApp() { 
  const eventService = useState => createEventsServicePlugin()[0];
  
  const calendar = useCalendarApp({
    events: [
      {
        id: 1,
        start: '2024-01-01',
        end: '2024-01-02',
        title: "Event 1",
      },
      {
        id: 1,
        start: '2024-01-01',
        end: '2024-01-02',
        title: "Event 1",
      },
    ],
    plugins: [
      eventService,
    ],
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
  });


return (
  <div>
    <ScheduleXCalendar
      calendarApp={calendar}
      defaultView="day"
      style={{ height: "100vh" }}
    />
  </div>)
}
  
