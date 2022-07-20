import create from 'zustand';
import { Todo, addTodo, deleteTodo, toggleTodo, updateTodo } from '@react-state-managers/types';

interface TodosState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  onNew: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onToggle: (todo: Todo) => void;
}

const useTodoStore = create<TodosState>()((set) => ({
  todos: [],
  setTodos: (todos) => set((state) => ({ ...state, todos })),
  onNew: (todo) => set((state) => ({ ...state, todos: addTodo(state.todos, todo) })),
  onUpdate: (todo) => set((state) => ({ ...state, todos: updateTodo(state.todos, todo) })),
  onToggle: (todo) => set((state) => ({ ...state, todos: toggleTodo(state.todos, todo) })),
  onDelete: (todo) => set((state) => ({ ...state, todos: deleteTodo(state.todos, todo) })),
}));

export const useTodos = () => useTodoStore((s) => s.todos);
export const useSetTodos = () => useTodoStore((s) => s.setTodos);
export const useOnNew = () => useTodoStore((s) => s.onNew);
export const useOnUpdate = () => useTodoStore((s) => s.onUpdate);
export const useOnToggle = () => useTodoStore((s) => s.onToggle);
export const useOnDelete = () => useTodoStore((s) => s.onDelete);
