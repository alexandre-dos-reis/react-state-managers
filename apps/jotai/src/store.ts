import { atom } from 'jotai';
import { Todo } from '@react-state-managers/types';

// Business Logic

const addTodo = (todos: Todo[], todo: Omit<Todo, 'id'>): Todo[] => {
  return [...todos, { ...todo, id: Date.now() }];
};

const updateTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.map((t) => (t.id === todo.id ? todo : t));
};

const deleteTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.filter((t) => t.id !== todo.id);
};

const toggleTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.map((t) =>
    t.id === todo.id ? { ...todo, isDone: !todo.isDone } : t
  );
};

export const emptyTodo: Todo = {
  id: Date.now(),
  content: '',
  createdAt: new Date(),
  updateAt: new Date(),
  isDone: false,
};

// Atoms getters values with initial data
export const todosAtom = atom<Todo[]>([]);
export const newTodoAtom = atom<Todo>(emptyTodo);

// Atoms setters actions
export const addTodoAtom = atom(
  (get) => get(newTodoAtom),
  (get, set) => {
    set(todosAtom, addTodo(get(todosAtom), get(newTodoAtom)));
    set(newTodoAtom, emptyTodo);
  }
);

// As a convention, we pass null because this is not readable ! Write only atoms...
export const updateTodoAtom = atom(null, (get, set, todo: Todo) => {
  set(todosAtom, updateTodo(get(todosAtom), todo));
});

export const deleteTodoAtom = atom(null, (get, set, todo: Todo) => {
  set(todosAtom, deleteTodo(get(todosAtom), todo));
});

export const toggleTodoAtom = atom(null, (get, set, todo: Todo) => {
  set(todosAtom, toggleTodo(get(todosAtom), todo));
});
