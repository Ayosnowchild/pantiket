import React from "react";
import "./button.css";
function Button({ title, variation, click }) {
  return (
    <>
      <button onClick={click} className={`${variation}-btn btn-style`} type="">
        {title}
      </button>
    </>
  );
}

export default Button;
