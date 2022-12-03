import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Purchased from "./Purchased/Purchased";
import Search from "./Search/Search";
import SingleEvent from "./Single-event";
import ConfirmTicket from "./ConfirmTicket/ConfirmTicket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:eventId" element={<SingleEvent />} />
          <Route path="/search" element={<Search />} />
          <Route path="/purchased" element={<Purchased />} />
          <Route path="/confirm" element={<ConfirmTicket />} />
          <Route path="/ticket/:ticketId" element={<ConfirmTicket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
