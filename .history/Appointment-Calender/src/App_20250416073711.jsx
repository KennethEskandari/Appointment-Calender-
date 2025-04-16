import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'


export default function CalenderApp() {

  const calender = useCalendarApp()
  return (
    <div>
      <ScheduleXCalendar CalenderApp={useCalendarApp()} />
    </div>
  )
}