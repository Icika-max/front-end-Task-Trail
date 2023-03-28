import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: newTodo})
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  

  };
 
  

  return (
    <div className='todo-container'>
      <input
      className='todo-input '
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button className='todo-button ' onClick={handleAddTodo}>Add Todo</button>
     
      <ul className='todo-list'>
        {/* <h2>All Todos</h2> */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
       
      </ul>
     
    </div>
  );
};

export default Todo;
