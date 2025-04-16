import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react"

import {
  createViewDay,
  createViewWeek,
  createViewMonth,
  createViewMonthAgenda,
} from "@schedule-x/calendar"
import { useEffect, useState } from "react"

import { createEventsServicePlugin } from "@schedule-x/events-service"

import '@schedule-x/theme-default/dist/index.css'

function CalendarApp() {
  const eventsService = useState(() => new createEventsServicePlugin())[0]

  const calendarApp = useCalendarApp({

    views: [createViewDay(), createViewWeek(), createViewMonth(), createViewAgenda()],

    events: [{
      id: '1',
      title: 'Event 1',
      start: '2023-10-01',
      end: '2023-10-02',
    }],

    plugins: [eventsService]
  })

  useEffect(() => {
    eventsService.getAll()
  }, [])

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendarApp} />
    </div>
  )
}

export default CalendarApp