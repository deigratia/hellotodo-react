import React from "react";
import "../index.css";

function Output(props) {
  return (
    <div className="output-border">
      {props.todos.map((todo, index) => (
        <div className="todo" key={index}>
          <div className="todo-text">{todo}</div>
          <div onClick={() => props.removeItem(index)}>Delete</div>
        </div>
      ))}
    </div>
  );
}

export default Output;
