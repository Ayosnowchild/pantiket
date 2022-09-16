import React from "react";
import "./searchresult.css";
function SearchResult({
  title,
  price,
  date,
  venueAddress,
  amountOfAttendees,
  organizer,
  img,
}) {
  return (
    <div className="search-result-container">
      <img src={`${img}`} alt="event" />
      <div className="search-result-details-container">
        <div className="search-details-title">
          <p className="title">{title}</p>
          <p className="price"> {price} </p>
        </div>
        <div className="search-details-sub-div">
          <p className="date"> {date} </p>
          <p className="address"> {venueAddress} </p>
          <div className="search-details-last-div">
            <p className="attendees"> {amountOfAttendees} </p>
            <p className="organizer"> {organizer} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
