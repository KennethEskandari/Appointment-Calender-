import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewDay, createViewMonth, createViewMonthAgenda, createViewWeek } from '@schedule-x/react'
}


export default function CalenderApp() {

  const calender = useCalendarApp({
    views: [create
  })
  return (
    <div>
      <ScheduleXCalendar CalenderApp={useCalendarApp()} />
    </div>
  )
}