import React from 'react';
import NewTodo from './newtodo';

const NewTodoList = ({ todos, onDelete, onRestore }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <NewTodo
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onRestore={onRestore}
        />
      ))}
    </div>
  );
};

export default NewTodoList;
