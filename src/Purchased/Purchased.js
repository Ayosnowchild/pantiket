import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../Single-event/components/Banner";
import EventInfo from "../Single-event/components/EventInfo";
import "./purchased.css";

function Purchased() {
  return (
    <div className="single-event-container">
      <Navbar />
      <Banner />
      <div className="purchased-news">
        <div className="tick-news">
          <div className="tick-container">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L9 12L13 8M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                stroke="#24B561"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="tick-text">Thanks for your purchase</p>
        </div>
        <p className="set-for">You are set for;</p>
        <span>
          <span className="event-name">Pelumi</span>
          <span className="purchased-item">
            (The musical play by Muyiwa Adigun)
          </span>
        </span>
        <p className="ticket-id">Your VIP ticket numbert is #12345687</p>
        <p className="ticket-instruct">
          1 Ticket has been sent to 'dotun@example.com'. Please use this number
          to get a physical pass at the event.
        </p>
        <p className="notice">N.B: One ticket is valid for just one person</p>
        <div className="purchased-flex">
          <div>
            <p className="date-venue">Date & Time</p>
            <div className="date-flex">
              <p className="date-text">On 14th February, 2022</p>
              <p className="date-text">5PM WAT</p>
            </div>
          </div>
          <div>
            <p className="date-venue">Venue</p>
            <p className="date-text">Oduduwa Hall, OAU, Ile-Ife, Osun State</p>
          </div>
        </div>
      </div>
      <div className="purchased-button-actions">
        <Button title={"Download Ticket"} variation="sec" />
        <Button title={"Share Event"} variation="pri" />
      </div>
      <div className="purchased-event-info">
        <EventInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Purchased;
