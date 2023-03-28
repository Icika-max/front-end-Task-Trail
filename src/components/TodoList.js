import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setNewTodo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((r) => r.json())
      .then((data) => setNewTodo(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setNewTodo(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const handleUpdate = (id, title) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
      .then(() => {
        setNewTodo(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, title };
            } else {
              return todo;
            }
          })
        );
      })
      .catch((error) => console.error(error));
  };

  const [editableTodo, setEditableTodo] = useState(null);

  const handleEdit = (todo) => {
    setEditableTodo(todo);
  };
  const handleSave = () => {
    console.log('Saving changes:', editableTodo);
    handleUpdate(editableTodo.id, editableTodo.title);
    setEditableTodo(null);
  };
  

  // const handleSave = () => {
  //   setEditableTodo(null);
  // };

  return (
    <div className='todo-container'>
    <ul className='todo-list'>
      {/* <h2>All Todos</h2> */}
      {todos.map((todo, index) => (
        <li key={index}>
          {editableTodo?.id === todo.id ? (
            <>
              <input
                type='text'
                value={editableTodo.title}
                onChange={(e) =>
                  setEditableTodo({ ...editableTodo, title: e.target.value })
                }
              />
              <button onClick={handleSave} style={{backgroundColor: "#4caf50"}}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.title}</span>
              <button onClick={() => handleEdit(todo)} style={{

                backgroundColor: "#4caf50"
                
              }}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
