import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [list, setList] = useState([]);
  const handleInput = () => {
    const input = document.getElementById("input");
    const value = input.value.trim();
    if (value) {
      setList([...list, { id: Date.now(), text: value }]);
      input.value = "";
    }
  };

  const removeTodo = (id) => {
    const filterData = list.filter((item) => {
      return item.id !== id;
    });
    setList([...filterData]);
  };
  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-Do List</h1>
        <div className="inputcontainer">
          <input type="text" id="input"></input>
          <button onClick={handleInput}>Add Todo</button>
        </div>
        <TodoList list={list} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default App;
