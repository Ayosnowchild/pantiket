import React from "react";
import Button from "./Button";
import "./navbar.css";
import logo from "./Pantiket.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
      </div>
      <div className="cta-container">
        <Button title={"Confirm Ticket"} variation="pri" />
      </div>
    </nav>
  );
}

export default Navbar;
