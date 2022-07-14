import { Todo } from '@react-state-managers/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addTodo } from '../todo.store';

export const TodoAdd = () => {
  const emptyTodo: Partial<Todo> = {
    content: '',
    isDone: false,
  };

  const [todo, setTodo] = useState(emptyTodo);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(emptyTodo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        name="title"
        type="text"
        value={todo.content}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
