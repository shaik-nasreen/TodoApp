import React, { useState } from 'react';

const NewTodo = ({ todo, onDelete, onUpdate, onComplete, onRestore }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleDelete = () => {
    onDelete(todo._id);
  };

  const handleRestore = () => {
    onRestore(todo._id);
  };

 
  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate(todo._id, { title: updatedTitle, completed: todo.completed });
    setEditing(false);
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      {editing ? (
        <>
          <input type="text" value={updatedTitle} onChange={handleTitleChange} />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <p>{todo.title}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleRestore}>Restore</button>
        </>
      )}
    </div>
  );
};

export default NewTodo;
