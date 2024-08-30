import React from "react";
import "./todolist.css"
function TodoList({ list , removeTodo}) {
  return (
    <div className="todolistdata"> 
      {list.map((item, index) => {
        return (
          <div key={index} className="todolistitem">
            <span> {item}</span>
            <button onClick={removeTodo}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
