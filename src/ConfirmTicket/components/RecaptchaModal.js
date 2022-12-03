import React from "react";
import "./recaptcha-modal.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ReCAPTCHA } from "react-google-recaptcha";
function RecaptchaModal({ setModal }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="confirm-ticket-container">
        <div className="container-header">
          <p className="container-title">Confirm Ticket</p>
          <button
            onClick={() => setModal((prevState) => !prevState)}
            className="close-icon"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#666670"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#666670"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="ticket-form-container">
          <form onSubmit={handleSubmit} className="confirm-ticket-form">
            <div className="confirm-form-input">
              <Input
                label={"Ticket Number"}
                type="email"
                placeholder={"Enter Ticket Number"}
              />
            </div>
            <div className="recaptcha-container" style={{ width: "300px" }}>
              <ReCAPTCHA sitekey="6LeVGAMiAAAAAIEbEMaOo5cdfmijpmOupx7M4Bcg" />
            </div>
            <div className="confirm-form-btn">
              <Button title={"Verify Ticket"} variation="sec" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RecaptchaModal;
