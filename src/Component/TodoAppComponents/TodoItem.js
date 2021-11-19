import React, { useState } from 'react';


function TodoItem({ todo, removeTodo }) {
  const [todoItem, setTodoItem] = useState(todo);

  const toggleDone = () => {
    setTodoItem({
      ...todoItem,
      "completed": !todoItem.completed
    });
  }
const {completed, text, id} = todoItem
  return (
   
      <div className="list-group-item">
        <div className="row">
        <div className="col-8"><p className={completed ? "isDone" : ""}>{text}</p></div>
        <div className="col-2"><button className="btn btn-primary" onClick={toggleDone}>{completed ? "undone" : "Done"}</button></div>
        <div className="col-2"><button className="btn btn-danger"
      
        onClick={() => 
          removeTodo(id)}>Delete</button></div>
          </div>
      </div>
     
  );
}

export default TodoItem;
