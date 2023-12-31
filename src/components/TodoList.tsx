import React from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className='delete-item' onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
