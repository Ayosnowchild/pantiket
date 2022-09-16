import React from "react";
import "./bank-transfer.css";

import Button from "../../components/Button";
function BankTransfer() {
  return (
    <div className="bank-info">
      <p className="payment-instruction">Send fund to the following account</p>
      <div className="bank-details">
        <div className="bank-flex">
          <p className="bank-details-text">Bank Name</p>
          <p className="bank-details-text">GTBank</p>
        </div>
        <div className="bank-flex">
          <p className="bank-details-text">Account Number</p>
          <p className="bank-details-text">0123 4567 89</p>
        </div>
        <div className="bank-flex">
          <p className="bank-details-text">Account Name</p>
          <p className="bank-details-text">Panticket Limited</p>
        </div>
        <div className="bank-flex">
          <p className="bank-details-text">Payment Status</p>
          <p className="bank-details-text">Waiting</p>
        </div>
      </div>
      <Button title={"Confirm Payment"} variation="sec" />
    </div>
  );
}

export default BankTransfer;
