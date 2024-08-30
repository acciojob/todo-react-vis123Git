import React from "react";
import "./todolist.css";
function TodoList({ list, removeTodo }) {
  return (
    <div className="todolistdata">
      {list.map((item) => {
        return (
          <div key={item.id} className="todolistitem">
            <span> {item.text}</span>
            <button onClick={() => removeTodo(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
