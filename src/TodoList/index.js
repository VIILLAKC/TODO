import "./TodoList.css";

function TodoList({ children }) {
    return (
      <article className="todo-list">
        <ul>
          {children}
        </ul>
      </article>
    );
  }


export { TodoList };