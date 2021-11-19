import React from 'react';

import TodoItem from './TodoItem'


function TodoList({ todos, removeTodo }) {
  const todoList = todos.map((todo, index) => {
    return <TodoItem todo={todo} key={index} removeTodo={removeTodo} />
  });

  return (
    <div className="TodoList">
      <h2>TodoList</h2>
      <div className="list-group">
        {todoList}
      </div>
    </div>
  );
}

export default TodoList;
