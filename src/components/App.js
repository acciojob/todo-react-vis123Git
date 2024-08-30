
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [list, setList] = useState([])
  const handleInput = () => {
    const input = document.getElementById('input').value
    if(input){
      setList([...list, input])
    }
    document.getElementById('input').value = ""
  }

  const removeTodo = () =>{

  }
    return (
    <div className="container">
      <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="inputcontainer">
        <input type="text" id="input"></input>
        <button onClick={handleInput}>Add Todo</button> 
      </div>
      <TodoList list ={list}/>

      </div>
    </div>
  )
}

export default App
