import {useCalandarApp, ScheduleXCalandar} from "@schedule-x/react"

import {
  createViewDay,
  createViewWeek,
  createViewMonth,
  createViewAgenda,
} from ".schedule-x/calandar"
import { useEffect, useState } from "react"

import {CreateEventServicePlugin} from "@schedule-x/events-service"

import '@schedule-x/theme-default/dist/index.css'

function CalendarApp(){
  const eventService = useState(() => new CreateEventServicePlugin())[0]

  const CalandarApp = useCalandarApp({
    views: [{createViewDay}, {createViewWeek}, {createViewMonth}, {createViewAgenda}],
    events: {[
      id:'1',
      title: 'Event 1',
      start: '2023-10-01',
      end:'2023-10-02',
    ]},
    plugins:

  })


}