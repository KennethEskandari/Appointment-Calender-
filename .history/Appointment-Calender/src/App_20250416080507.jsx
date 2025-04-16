import {useCalendarApp, ScheduleXCalendar} from "@schedule-x/react";
import {crearwViewDay, createViewMonthGrid, createViewMonthAgenda, createViewWeek} from "@schedule-x/calendar";
import {createEventsServivePlugin} from "@schedule-x/events-service";
import { useEffect, useState } from "react";

function CalendarApp() { 
  const eventService = useState => createEventsServivePlugin())[0];
  
  const calendar = useCalendarApp({
}