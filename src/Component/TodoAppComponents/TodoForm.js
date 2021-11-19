import React, { useState } from 'react';


function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label  className="col-12 form-label" srOnly>
            Enter a Todo
    </label>
          <div className="col-10">
            <input className="form-control"
              type="text"
              placeholder="Enter a Todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              required
            />
          </div>
          <div  className="col-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
