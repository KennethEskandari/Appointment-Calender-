import {useCalendarApp, ScheduleXCalendar} from "@schedule-x/react";
import {createViewDay, createViewMonthGrid, createViewMonthAgenda, createViewWeek} from "@schedule-x/calendar";
import {createEventsServicePlugin} from "@schedule-x/events-service";
import { useEffect, useState } from "react";

function CalendarApp() { 
  const eventService = useState => createEventsServicePlugin()[0];
  
  const calendar = useCalendarApp({
    events: [
      {
        id: 1,
        start: new Date(2023, 9, 1),
        end: new Date(2023, 9, 2),
        title: "Event 1",
      },
      {
        id: 2,
        start: new Date(2023, 9, 2),
        end: new Date(2023, 9, 3),
        title: "Event 2",
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
  