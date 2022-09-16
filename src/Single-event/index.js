import React, { useState } from "react";
import "./single-event.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "./components/Banner";
import Overlay from "../components/Overlay";
import BookTicket from "./components/BookTicket";
// import EventDescription from "./components/EventDescription";
// import GetTicket from "./components/GetTicket";
import Content from "./components/Content";

function SingleEvent() {
  const [modal, setModal] = useState(false);
  return (
    <div className="single-event-container">
      {modal ? (
        <Overlay>
          <BookTicket setModal={setModal} />
        </Overlay>
      ) : null}

      <Navbar />
      <Banner />
      {/* <EventDescription />
      <GetTicket /> */}
      <Content setModal={setModal} />
      <Footer />
    </div>
  );
}

export default SingleEvent;
