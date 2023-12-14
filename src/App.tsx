import { TodoList } from './components/TodoList';

function App() {
  const todos = [{id: 't1', text: 'Finish the course'}];

  return (
    <>
      <TodoList items={todos} />
    </>
  )
}

export default App;
