import React from "react";
import "./button.css";
function Button({ title, variation }) {
  return (
    <>
      <button className={`${variation}-btn btn-style`} type="">
        {title}
      </button>
    </>
  );
}

export default Button;
