import React from "react";
import "./overlay.css";
function Overlay({ children }) {
  return <div className="overlay">{children}</div>;
}

export default Overlay;
