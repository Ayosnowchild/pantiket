import React, { useState } from "react";
import "./card-payment.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BankTransfer from "./BankTransfer";
function CardPayment() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div className="booking-container">
      <div className="container-header">
        <p className="container-title">Make Payment</p>
        <button className="close-icon">
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
      <div className="payment-types">
        <p
          onClick={() => setPaymentMethod("card")}
          className={`${
            paymentMethod === "card" && "active-switch"
          }  inactive-switch`}
        >
          Card Payment
        </p>
        <p
          className={`${
            paymentMethod === "bank" && "active-switch"
          }  inactive-switch`}
          onClick={() => setPaymentMethod("bank")}
        >
          Bank Transfer
        </p>
      </div>
      <div className="ticket-form-container">
        {paymentMethod === "card" ? (
          <form className="ticket-form">
            <div className="form-input">
              <Input
                label={"Card Number"}
                type="number"
                placeholder={"Card Digits"}
              />
            </div>
            <div className="form-flex">
              <div className="form-input flex-form-divs">
                <Input
                  label={"Expiry Date"}
                  type="number"
                  placeholder={"MM/YYYY"}
                />
              </div>
              <div className="form-input flex-form-divs">
                <Input label={"CVV"} type="number" placeholder={"XXX"} />
              </div>
            </div>
            <Button title={"Make Payment"} variation="sec" />
          </form>
        ) : (
          <BankTransfer />
        )}

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

export default CardPayment;
