import { useState } from 'react';
import { deleteTodo, toggleTodo } from '../todo.store';
import { Todo } from '@react-state-managers/types';
import { TodoEdit } from './todo-edit';

interface TodotItemProps {
  t: Todo;
}

export const TodoItem = ({ t }: TodotItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="grid">
      {isEditing ? (
        <TodoEdit t={t} toggleIsDone={toggleEdit} />
      ) : (
        <article>
          <header>
            <h2>
              {t.id} {t.content}
            </h2>
          </header>
          <footer className="grid">
            <fieldset>
              <legend>Is done ?</legend>
              <input
                type="checkbox"
                role="switch"
                checked={t.isDone}
                onChange={() => toggleTodo(t)}
              />
            </fieldset>
            <button onClick={() => toggleEdit()}>Edit</button>
            <button onClick={() => deleteTodo(t)}>Delete</button>
          </footer>
        </article>
      )}
    </li>
  );
};
