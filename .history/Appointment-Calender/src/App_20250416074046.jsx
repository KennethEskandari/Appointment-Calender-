import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewDay, 
         createViewMonth, 
         createViewMonthAgenda, 
         createViewWeek 
        } from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'



export default function CalenderApp() {

  const calender = useCalendarApp({
    views: [createViewDay,
      createViewWeek,
      createViewMonth,
      createViewMonthAgenda],
    defaultView: 'day',
  })
  return (
    <div>
      <ScheduleXCalendar CalenderApp={useCalendarApp()} />
    </div>
  )
}