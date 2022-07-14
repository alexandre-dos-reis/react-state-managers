import { ChangeEvent, useState, MouseEvent, FormEvent } from 'react';
import { updateTodo } from '../todo.store';
import { Todo } from '@react-state-managers/types';

interface TodoEditProps {
  t: Todo;
  toggleIsDone: () => void;
}

export const TodoEdit = ({ t, toggleIsDone }: TodoEditProps) => {
  const [todo, setTodo] = useState<Todo>(t);

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleIsDone();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo((t) => ({
      ...t,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo(todo);
    toggleIsDone();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="content"
        value={todo.content}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
};
