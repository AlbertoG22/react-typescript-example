import { useState } from 'react';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // {id: 't1', text: 'Finish the course'}

  const todoAddHandler = (text: string) => {
    // console.log(text);
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  )
}

export default App;
