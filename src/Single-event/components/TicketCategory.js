import React from "react";
import Button from "../../components/Button";
import "./ticket-category.css";
function TicketCategory({ name, price, availableTicket, variant, setModal }) {
  return (
    <div className="ticket-wrapper">
      <div className="ticket-type">
        <div className={`ticket-color-${variant} ticket-color-style`}></div>
        <p className="ticket-type-title">{name}</p>
      </div>
      <p className="ticket-price">{price}</p>
      <div className="quantity-container">
        <p className="quantity-text">Quantity</p>
        <div className="quantity-counter">
          <p className="available-ticket">{availableTicket}</p>
          <div className="ticket-input"></div>
        </div>
      </div>
      <div className="get-ticket">
        <Button
          click={() => setModal((prevState) => !prevState)}
          title={"Get Ticket"}
          variation="sec"
        />
      </div>
    </div>
  );
}

export default TicketCategory;
