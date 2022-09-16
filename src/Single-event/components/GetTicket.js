import React from "react";
import "./get-ticket.css";
import TicketCategory from "./TicketCategory";

function GetTicket() {
  return (
    <div>
      <TicketCategory
        name="VIP Ticket"
        price={"N10,000"}
        availableTicket="10"
      />
    </div>
  );
}

export default GetTicket;
