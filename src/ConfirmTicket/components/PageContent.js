import React from "react";
// import ReactToPdf from "react-to-pdf";
import Button from "../../components/Button";
import "./page-content.css";
import PurchaseSummary from "./PurchaseSummary";
import EventDescription from "../../Single-event/components/EventDescription";
import EventInfo from "../../Single-event/components/EventInfo";
import TicketDetails from "./TicketDetails";
// import RecaptchaModal from "./RecaptchaModal";
function PageContent() {
  //   const ref = React.createRef();
  return (
    <div className="page-content-container">
      <TicketDetails />
      <PurchaseSummary titleState={false} />
      <div className="ticket-action-btn">
        <div>
          <Button variation="sec" title="Download ticket" />
        </div>
        {/* <ReactToPdf targetRef={ref} filename="receipt.pdf">
          {({ toPdf }) => (
            <div> ref={ref}
              <Button click={toPdf} variation="sec" title="Download ticket" />
            </div>
          )}
        </ReactToPdf> */}
        <div>
          <Button variation="pri" title="Share Event" />
        </div>
      </div>
      <div className="purchased-event-info">
        <EventDescription
          eventDescription={`The play, "Pelumi," is a musical love story that revolves around
          Pelumi, a woman who was in a relationship with Adigun, a man with
          direction and purpose, but felt pressured by her mother to find love
          with someone else because of her mother's wealth and availability. You
          won’t want to miss this show on this year valentine. `}
        />
      </div>
      <div className="purchased-event-info">
        <EventInfo />
      </div>
    </div>
  );
}

export default PageContent;
