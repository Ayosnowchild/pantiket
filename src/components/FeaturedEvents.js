import React from "react";
import "./featured-event.css";
function FeaturedEvents({ img, discount, name, location, price }) {
  return (
    <div className="featured-event-container">
      <img src={`${img}`} alt="event" />
      <div className="event-card-details">
        <div className="card-title">
          <p className="name">{name}</p>
          <p className="price">{price}</p>
        </div>
        <p className="location">{location}</p>
        <p className="discount">{discount}</p>
      </div>
    </div>
  );
}

export default FeaturedEvents;
