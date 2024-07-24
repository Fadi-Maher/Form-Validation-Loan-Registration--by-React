import React from "react";
import "./FormStyles.css";
function Modal({ isVisible, errorMessage = "null" }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The Form Has been Submitted Successfully</h1> */}
          <h1 style={{color: errorMessage ? "red" : "green"}}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}

export default Modal;
