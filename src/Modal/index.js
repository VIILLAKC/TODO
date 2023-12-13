import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import "./Modal.css"

function Modal({ children }){

    const { openModal } = React.useContext(TodoContext);

    return ReactDOM.createPortal(
    <div className={`modal ${openModal ? 'modal-active' : ''}`}>
        <label htmlFor="close-modal"  className="modal__bg"></label>
        <div className="modal-body">
          { children }
        </div>
    </div>,
    document.getElementById('modal')
    );
}

export { Modal };