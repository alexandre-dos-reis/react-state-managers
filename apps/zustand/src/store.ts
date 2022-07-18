import create from 'zustand';
import { Todo } from '@react-state-managers/types';

const addTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return [...todos, { ...todo, id: Date.now() }];
};

const updateTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.map((t) => (t.id === todo.id ? todo : t));
};

const deleteTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.filter((t) => t.id !== todo.id);
};

const toggleTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return todos.map((t) => (t.id === todo.id ? { ...todo, isDone: !todo.isDone } : t));
};

interface TodosState {
  todos: Todo[];
  onGet: (todos: Todo[]) => void;
  onNew: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onToggle: (todo: Todo) => void;
}

export const useTodoStore = create<TodosState>()((set) => ({
  todos: [],
  onGet: (todos) => set(() => ({ todos })),
  onNew: (todo) => set((state) => ({ todos: addTodo(state.todos, todo) })),
  onUpdate: (todo) => set((state) => ({ todos: updateTodo(state.todos, todo) })),
  onToggle: (todo) => set((state) => ({ todos: toggleTodo(state.todos, todo) })),
  onDelete: (todo) => set((state) => ({ todos: deleteTodo(state.todos, todo) })),
}));
