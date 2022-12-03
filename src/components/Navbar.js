import React, { useState } from "react";
import Button from "./Button";
import "./navbar.css";
import Overlay from "./Overlay";
import logo from "./Pantiket.svg";
import RecaptchaModal from "../ConfirmTicket/components/RecaptchaModal";
function Navbar() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <Overlay>
          <RecaptchaModal setModal={setModal} />
        </Overlay>
      ) : null}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="nav-logo" />
        </div>
        <div className="cta-container">
          <Button
            click={() => setModal(!modal)}
            title={"Confirm Ticket"}
            variation="pri"
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
