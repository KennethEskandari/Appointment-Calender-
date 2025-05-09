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
import {createScrollControllerPlugin} from '@schedule-x/scroll-controller';

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]

  const scrollController = createScrollControllerPlugin({
    initialScroll: '07:50:00' // Corrected time format
  })

  const calendarApp = useCalendarApp({

    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],

    events: [{
      id: '1',
      title: 'Event 1',
      start: '2023-10-01',
      end: '2023-10-02',
    }],

    plugins: [eventsService, scrollController]
  })

  useEffect(() => {
    eventsService.getAll()
  }, [eventsService])

  return (
    <div>
    <div className = "min-h-[80] w-full max-w-41 bg-white"/>
      <ScheduleXCalendar calendarApp={calendarApp} />
    </div>
  )
}

export default CalendarApp;
