import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";


function TodoCounter() {
    
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
  
  
  return (
      <h1 className="title-todo-machine">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h1>
    );
  }

    export { TodoCounter };