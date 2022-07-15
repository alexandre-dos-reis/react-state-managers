import { useObservableState } from 'observable-hooks';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '@react-state-managers/types';
import { http } from './http';
import { environment as env } from '../environments/environment';
import {
  TodosGetAllResponse,
  TodoUpdatedResponse,
  TodoDeletedResponse,
} from '@react-state-managers/api-interface';

const todosApi = `${env.api}/todos`;
const todos$ = new BehaviorSubject<Todo[]>([]);

export const getTodosFromApi = async (): Promise<void> => {
  const res = await http.get<TodosGetAllResponse>(`${todosApi}`, {});
  todos$.next(todos$.getValue().concat(res.todos));
};

export const emptyTodos = (): void => {
  todos$.next([]);
};

export const addTodo = (newTodo: Partial<Todo>): void => {
  const todo: Todo = {} as Todo;
  todos$.next([...todos$.value, todo]);
};

export const updateTodo = async (todo: Todo): Promise<void> => {
  const res = await http.get<TodoUpdatedResponse>(`${todosApi}/${todo.id}`, {
    // body: {
    //   'todo': JSON.stringify(todo)
    // }
  });

  todos$.next(
    todos$.value.map((t) => (t.id === res.updatedTodo.id ? res.updatedTodo : t))
  );
};

export const deleteTodo = async (todo: Todo): Promise<void> => {
  const res = await http.delete<TodoDeletedResponse>(
    `${todosApi}/${todo.id}`,
    {}
  );
  todos$.next(todos$.value.filter((t) => t.id !== res.deletedTodo.id));
};

export const toggleTodo = (todo: Todo): void => {
  todos$.next(
    todos$.value.map((t) =>
      t.id === todo.id ? { ...todo, isDone: !todo.isDone } : t
    )
  );
};

export const useTodos = () => useObservableState(todos$);
