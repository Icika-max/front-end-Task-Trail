import React from "react";



const DeleteTodo = () => {
    
  
    return (
      <div className="todo-item">
        <span>{todos.text}</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  export default DeleteTodo