import React  from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const { 
        toggleModal,
        addTodo
     } = React.useContext(TodoContext);

     const [newTodoValue, setNewTodoValue] = React.useState('');

     const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        toggleModal();
     }

     const onChange = (event) => {
        setNewTodoValue(event.target.value);
     }

  return (
    <form className="form-todo" onSubmit={onSubmit}>
        <h2>Añadir TODO</h2>
        <input type="text" className="input-todo" required value={newTodoValue} onChange={onChange}/>
        <button type="submit" className="btn btn-primary">Añadir</button>
        <button id="close-modal" onClick={toggleModal}>Cancelar</button>
    </form>
  );
}

export { TodoForm };