import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'


export default function CalenderApp() {
  return (
    <div>
      <ScheduleXCalendar CalenderApp={useCalendarApp()} />
    </div>
  )
}