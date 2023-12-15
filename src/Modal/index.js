import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

function Modal({ children }){

    return ReactDOM.createPortal(
      <div className="modal-container">
        <label htmlFor="close-modal"  className="modal-bg"></label>
        <div className="modal-body">

          { children }
          
        </div>
      </div>,
    document.getElementById('modal')
    );
}

export { Modal };