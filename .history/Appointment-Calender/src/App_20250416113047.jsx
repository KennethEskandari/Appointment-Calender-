import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
  createCalendar,
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

  const config = { 
    dayBoundaries: {
      start: '06:00',
      end: '18:00',
    },
  }

  const calendarApp = useCalendarApp({

    views: [
      createViewDay({ startHour: 7, endHour: 20, ...config.dayBoundaries }),
      createViewWeek({ startHour: 7, endHour: 20, ...config.dayBoundaries }),
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

    plugins: [eventsService, scrollController]
  })

  useEffect(() => {
    const calendar = createCalendar(config)
    calendar.render(document.getElementById("calendar"))
    eventsService.getAll()
  }, [eventsService])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="min-h-[80vh] w-[80vw] bg-white shadow-lg rounded-lg p-6">
        <ScheduleXCalendar calendarApp={calendarApp} />
      </div>
    </div>
  );
}

export default CalendarApp;
