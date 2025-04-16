import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react"

import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
} from "@schedule-x/calendar"
import { useEffect, useState } from "react"

import { createEventsServicePlugin } from "@schedule-x/events-service"

import '@schedule-x/theme-default/dist/index.css'

import {createScrollControllerProgram} from '@scheduler-x/scroll-controller'

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]

  const scrollController = createScrollControllerProgram({
    initialScroll: '7:50'
  })

  const calendarApp = useCalendarApp({

    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],

    events: [{
      id: '1',
      title: 'Event 1',
      start: '2023-10-01',
      end: '2023-10-02',
    }],

    plugins: [eventsService].[scrollController
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