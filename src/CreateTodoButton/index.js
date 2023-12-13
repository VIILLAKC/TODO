import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {

  const { toggleModal } = React.useContext(TodoContext);

    return (
      <button className="todo-button"
      onClick={toggleModal} >
        ¡Crear nuevo todo!
      </button>
    );
  }

export { CreateTodoButton };