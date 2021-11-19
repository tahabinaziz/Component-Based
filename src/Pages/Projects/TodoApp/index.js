import React, { useState } from 'react';
import TodoForm from '../../../Component/TodoAppComponents/TodoForm'
import TodoList from '../../../Component/TodoAppComponents/TodoList'
import Navbar from '../../../Component/Navbar/Navbar';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);


  const addTodo = (todoText) => {
    const todo = { id: nextIndex, text: todoText, completed: false };

    setTodos([...todos, todo]);
    setNextIndex(nextIndex + 1);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div>
    <Navbar />
    <div className="container">
      <h2 className="mt-4 mb-4">Todo App</h2>
  <div className="card">
    <div className="card-content p-4">

      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
  </div>
  </div>
  
    </div>
    </div>
  );
}

export default TodoApp;
