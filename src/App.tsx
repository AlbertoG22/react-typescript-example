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

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </>
  )
}

export default App;
