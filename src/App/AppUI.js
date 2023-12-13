import React from 'react';
import './App.css';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

import { TodosLoading } from '../TodosLoading';


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);
    

  return (
    <main>
      
    <section className='todo--container container-main'>
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {
          loading && (
              <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
              </>
          )}
              {error && <p>Error...</p> }    
              {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}

              {searchedTodos.map(todo => (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList>
        
        <CreateTodoButton/>        
        
        </section>
        
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )
        }
    </main>
  );
}

export { AppUI };