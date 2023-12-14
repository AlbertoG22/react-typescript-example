import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

function App() {
  const todos = [{id: 't1', text: 'Finish the course'}];

  return (
    <>
      <TodoList items={todos} />
      <NewTodo />
    </>
  )
}

export default App;
