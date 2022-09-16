import React from "react";
import "./Events.css";
function Events({ img, name, date, location, price }) {
  return (
    <div className="event-card-container">
      <img src={`${img}`} alt="event" />
      <div className="event-card-details">
        <p className="name">{name}</p>
        <p className="date">{date}</p>
        <p className="location">{location}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default Events;
