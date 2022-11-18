import React, { useState } from "react";
import icon from "./icon.svg";
import './ToDo.css'

const ToDo = () => {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);

  const newChange = (e) => {
    setText(e.target.value.toUpperCase());
  };
  const newAdd = () => {
    const task ={
        id:todos.length === 0 ? 1 : todos[todos.length-1].id + 1,
        taskName:text


    }
    setTodo([...todos, task]);
    setText("");
  };
  const deleteTodo =(id) =>{
    setTodo(todos.filter((elem) => elem.id !== id))
  }
console.log(todos)
  return (
    <div className="conainer">
      <div>
        <h1 className="headerName">TODO LIST</h1>
      </div>
      <div>
        <input
          className="inputBox"
          type="text"
          placeholder="new..."
          value={text}
          onChange={newChange}
        />
        <button className="addButton" onClick={newAdd}>
          Add
        </button>
      </div>
      <div className="toDoList">
        {todos.map((elem) => {
          return (
            <div  className="sss" key={elem}>
                <input type="checkbox" />
              {elem.taskName}
               <button className="deleteButton" onClick={() => deleteTodo(elem.id)}> <img src={icon} alt="icon" height={20} /></button> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
