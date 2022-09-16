import React from "react";
import "./event-description.css";
function EventDescription() {
  return (
    <div className="event-description-container">
      <div className="details-container">
        <p className="details-heading">Event Description</p>
        <p className="details-text">
          The play, "Pelumi," is a musical love story that revolves around
          Pelumi, a woman who was in a relationship with Adigun, a man with
          direction and purpose, but felt pressured by her mother to find love
          with someone else because of her mother's wealth and availability. You
          won’t want to miss this show on this year valentine.
        </p>
      </div>
      <div className="details-container">
        <p className="details-heading">Date and Time</p>
        <div className="venue-flex">
          <p className="details-text">14th February, 2022</p>
          <p className="details-text">5PM Prompt</p>
        </div>
      </div>
      <div className="details-container">
        <p className="details-heading">Venue</p>
        <p className="details-text">
          Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State
        </p>
      </div>
    </div>
  );
}

export default EventDescription;
