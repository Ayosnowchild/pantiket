import React from "react";
import "./event-info.css";
function EventInfo() {
  return (
    <div className="event-info-container">
      <div className="description-side">
        <p className="event-info-heading">MUYIWA ADIGUN SHOW </p>
        <p className="event-info-text">
          Muyiwa Adigun Show, the producer and promoter of "PELUMI," is a
          non-governmental organization with the goal of uniting families and
          entertaining wisdom. Through entertainment, we hope to proclaim and
          promote the practice of sound family values, as well as educate young
          people on the dynamics of a fulfilling and decent relationship,
          thereby building a peaceful and productive society and nation.
          <br /> <br />
          We pursue this vision by organizing conferences, seminars, talk shows,
          online articles, and podcasts, as well as stage plays in places where
          young people congregate
        </p>
      </div>
      <div className="event-info-flex">
        <div className="event-info-socials">
          <p className="social-type">Phone Number</p>
          <p className="social-info">0802 134 5678</p>
        </div>
        <div className="event-info-socials">
          <p className="social-type">Email</p>
          <p className="social-info">hello@pelumi.com</p>
        </div>
        <div className="event-info-socials">
          <p className="social-type">Twitter</p>
          <p className="social-info">@pelumi</p>
        </div>
        <div className="event-info-socials">
          <p className="social-type">Instagram</p>
          <p className="social-info">@pelumi</p>
        </div>
        <div className="event-info-socials">
          <p className="social-type">Facebook</p>
          <p className="social-info">facebook.com/pelumi</p>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
