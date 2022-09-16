import React from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import FeaturedEvents from "../components/FeaturedEvents";
import "./search.css";
import SearchResult from "../components/SearchResult";
import Footer from "../components/Footer";
function Search() {
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
          <p className="section-title">Search Result</p>
          <div className="search-div-container">
            <SearchResult
              img={"/image/search-result-img-1.png"}
              title="Title"
              price="Price"
              date="Date"
              venueAddress="Venue address"
              amountOfAttendees="# of Attendies"
              organizer="Organizer"
            />
            <SearchResult
              img={"/image/search-result-img-2.png"}
              title="Title"
              price="Price"
              date="Date"
              venueAddress="Venue address"
              amountOfAttendees="# of Attendies"
              organizer="Organizer"
            />
            <SearchResult
              img={"/image/search-result-img-2.png"}
              title="Title"
              price="Price"
              date="Date"
              venueAddress="Venue address"
              amountOfAttendees="# of Attendies"
              organizer="Organizer"
            />
          </div>
        </div>
        <div className="featured-events-container">
          <p className="section-title">Featured Events</p>
          <div className="search-featured-section">
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

export default Search;
