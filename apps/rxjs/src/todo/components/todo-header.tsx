import { useTodos, getTodosFromApi, emptyTodos } from '../todo.store';

export const TodoHeader = () => {
  const todos = useTodos();
  return (
    <>
      <div>Total : {todos.length}</div>
      <div>Total sold : {todos.filter((t) => t.isDone === true).length}</div>
      <button onClick={() => getTodosFromApi()}>Fetch todos</button>
      <button onClick={() => emptyTodos()}>Empty todos</button>
    </>
  );
};
