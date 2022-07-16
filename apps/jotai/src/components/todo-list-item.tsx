import { Button, Input, Flex, Checkbox } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import {
  todosAtom,
  toggleTodoAtom,
  updateTodoAtom,
  deleteTodoAtom,
} from '../store';

export function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);

  return (
    <>
      {todos.map((t) => (
        <Flex pt={2} key={t.id}>
          <Checkbox isChecked={t.isDone} onChange={() => toggleTodo(t)} />
          <Input
            mx={2}
            value={t.content}
            onChange={(e) => updateTodo({ ...t, content: e.target.value })}
          />
          <Button onClick={() => deleteTodo(t)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}
