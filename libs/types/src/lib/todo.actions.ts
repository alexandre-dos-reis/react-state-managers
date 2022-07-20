import { Todo } from './todo.entity';

export const addTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return [...todos, { ...todo, id: Date.now() }];
};

export const updateTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.map((t) => (t.id === todo.id ? todo : t));
};

export const deleteTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.filter((t) => t.id !== todo.id);
};

export const toggleTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.map((t) => (t.id === todo.id ? { ...todo, isDone: !todo.isDone } : t));
};
