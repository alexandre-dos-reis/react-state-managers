import { useObservableState } from 'observable-hooks';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '@react-state-managers/types';
import { callApiTodos } from './todo.api';

const todos$ = new BehaviorSubject<Todo[]>([]);

export const getTodosFromApi = (): void => {
  callApiTodos().then((res) => todos$.next(todos$.getValue().concat(res.todos)));
};

export const emptyTodos = (): void => {
  todos$.next([]);
};

export const addTodo = (newTodo: Partial<Todo>): void => {
  const todo: Todo = {} as Todo;
  todos$.next([...todos$.value, todo]);
};

export const updateTodo = (todo: Todo): void => {
  todos$.next(todos$.value.map((t) => (t.id === todo.id ? todo : t)));
};

export const deleteTodo = (todo: Todo): void => {
  todos$.next(todos$.value.filter((t) => t.id !== todo.id));
};

export const toggleTodo = (todo: Todo): void => {
  todos$.next(
    todos$.value.map((t) =>
      t.id === todo.id ? { ...todo, isDone: !todo.isDone } : t
    )
  );
};

export const useTodos = () => useObservableState(todos$);
