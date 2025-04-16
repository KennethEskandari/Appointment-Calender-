import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewDay, 
         createViewMonthGrid, 
         createViewMonthAgenda, 
         createViewWeek 
        } from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'



export default function CalenderApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  
  const calendar = useCalendarApp({
    views: [createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda()
    ],
    defaultView: 'day',
  })

  return (
    <div>
      <ScheduleXCalendar CalenderApp={useCalendarApp()} />
    </div>
  )
}