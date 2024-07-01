import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import moment from "moment";
import Toolbar from "./Toolbar";
import Sidebar from '../sidebar/Sidebar1';
import EventModal from "./EventModal"; 
import addboxicon from "../images/addbox.png";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState(props.events || []);

  const handleAddEvent = () => {
    setModalOpen(true);
  };

  const handleSaveEvent = (newEvent) => {
    console.log("New event:", newEvent);
    setEvents([...events, newEvent]);
  };

  return (
    <>
      <Sidebar />
      <div className="calendar-form">
        <div className="Calendar">Calendar</div>
        <button className="add-event-button" onClick={handleAddEvent}>
        <img src={addboxicon} alt="addbox Icon" className="icon" width="20px" />
            일정 추가</button>
        <div className="calendar-container">
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, padding: 10 }}
            components={{
                toolbar: Toolbar,
            }}
            eventPropGetter={(event) => ({
                style: {
                backgroundColor: event.color, 
                color: event.start.getDay() === 0 ? '2px solid red' : 'none', 
                },
            })}
        />
        </div>
      </div>
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(newEvent) => {
          setModalOpen(false);
          handleSaveEvent(newEvent);
        }}
      />
    </>
  );
};

export default MyCalendar;
