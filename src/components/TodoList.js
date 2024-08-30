import React from "react";
import "./todolist.css";
function TodoList({ list, removeTodo }) {
  return (
    <div className="todolistdata">
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id} className="todolistitem">
              <span> {item.text}</span>
              <button onClick={() => removeTodo(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
