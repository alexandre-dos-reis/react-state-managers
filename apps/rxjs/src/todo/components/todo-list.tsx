import { useTodos } from '../todo.store';
import { TodoItem } from './todo-item';

export const TodoList = () => {
  const todos = useTodos();
  return (
    <ul>
      {todos.map((t) => (        
        <TodoItem t={t} key={t.id} />
      ))}
    </ul>
  );
};
