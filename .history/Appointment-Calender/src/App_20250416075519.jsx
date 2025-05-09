import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewDay, 
         createViewMonthGrid, 
         createViewMonthAgenda, 
         createViewWeek 
        } from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { useState } from 'react'
import { useEffect } from 'react'



export default function CalenderApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]

  const calendar = useCalendarApp({
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
        start: '2023-12-16',
        end: '2023-12-16',
      },
    ],
    plugins: [eventsService],
  });

  useEffect(() => {
    eventsService.getAll()
  }, []);
  

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <ScheduleXCalendar 
        CalenderApp={calendar} 
        className="mx-auto mt-8 border-2 rounded-lg shadow-lg bg-white p-4"
      />
    </div>
  )
}