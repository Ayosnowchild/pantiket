import React from "react";
import "./book-ticket.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
function BookTicket({ setModal }) {
  return (
    <div className="booking-container">
      <div className="container-header">
        <p className="container-title">Book Ticket</p>
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
        <form className="ticket-form">
          <div className="form-input">
            <Input label={"Name"} type="text" placeholder={"Enter Name"} />
          </div>
          <div className="form-input">
            <Input label={"Email"} type="email" placeholder={"Enter Email"} />
          </div>
          <div className="form-input">
            <Input
              label={"Phone Number"}
              type="text"
              placeholder={"Enter Phone Number"}
            />
          </div>
          <div className="form-input">
            <Input
              label={"Guest Email"}
              type="text"
              placeholder={"Enter Email"}
            />
          </div>
          <Button title={"Make Payment"} variation="sec" />
        </form>
        <div className="ticket-summary">
          <div className="ticket-type-group">
            <p className="type-group">
              <span className="text-type-one">Regular Ticket</span>
              <span className="type-price">(N1,000.00)</span>
            </p>
            <p className="price-group">
              <span className="text-type-one">Qty x 2</span>
              <span className="text-type-one">N2,000.00</span>
            </p>
          </div>
          <div className="ticket-price-group">
            <p className="type-group">
              <span className="text-type-one">Sub-total</span>
              <span className="text-type-one">(N2,000.00)</span>
            </p>
            <p className="price-group">
              <span className="text-type-one">VAT7.5%</span>
              <span className="text-type-one">(N150.00)</span>
            </p>
            <p className="total-group">
              <span className="text-type-two">Total</span>
              <span className="text-type-two">(N2,150.00)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
