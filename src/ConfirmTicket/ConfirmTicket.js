import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../Single-event/components/Banner";
import PageContent from "./components/PageContent";
import PurchaseSummary from "./components/PurchaseSummary";
import TicketDetails from "./components/TicketDetails";

function ConfirmTicket() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PageContent />
      <Footer />
    </div>
  );
}

export default ConfirmTicket;
