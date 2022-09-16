import React from "react";
import Button from "../components/Button";
import Events from "../components/Events";
import FeaturedEvents from "../components/FeaturedEvents";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import "./homepage.css";
function HomePage() {
  return (
    <>
      <Navbar />
      <header className="home-header">
        <div className="header-text">
          <p className="text-content">Connect and get ticket to </p>
          <p className="text-content">events near you based on your</p>
          <p className="text-content">interest</p>
        </div>
      </header>
      <section className="event-section">
        <form className="search-form">
          <div className="search-input">
            <Input placeholder={"Search Event"} />
          </div>
          <div className="category-input">
            <Input placeholder={"Categories"} />
          </div>
          <div className="form-btn">
            <Button variation={"sec"} title={"Search Event"} />
          </div>
        </form>
        <div className="event-container">
          <p className="section-title">Events near you</p>
          <div className="events">
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
            <Events
              img={"/image/event-bg-1.png"}
              location="location"
              price="#2000"
              date="date"
              name="Event Name"
            />
          </div>
        </div>
        <div className="featured-events-container">
          <p className="section-title">Featured Events</p>
          <div className="featured-section">
            <FeaturedEvents
              img={"/image/featured-event-bg-1.png"}
              location="Lagos"
              price="N2000"
              discount="20% off"
              name="The concert"
            />
            <FeaturedEvents
              img={"/image/featured-event-bg-2.png"}
              location="Lagos"
              price="N2000"
              discount="20% off"
              name="The concert"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
