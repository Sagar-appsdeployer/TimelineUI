
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const TaskCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Enter event title:");
    const startDate = window.prompt("Enter start date (YYYY-MM-DD):");
    const endDate = window.prompt("Enter end date (YYYY-MM-DD):");
    if (title && startDate && endDate) {
      const newEvent = {
        start: moment(startDate).toDate(),
        end: moment(endDate).toDate(),
        title
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default TaskCalendar;
