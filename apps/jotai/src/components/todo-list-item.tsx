import { Button, Input, Flex, Checkbox } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { todosAtom } from '../store';
import { deleteTodo, toggleTodo, updateTodo } from '@react-state-managers/types';

export function TodoListItems() {
  const [todos, setTodos] = useAtom(todosAtom);

  return (
    <>
      {todos.map((t) => (
        <Flex pt={2} key={t.id}>
          <Checkbox isChecked={t.isDone} onChange={() => setTodos(toggleTodo(todos, t))} />
          <Input
            mx={2}
            value={t.content}
            onChange={(e) => setTodos(updateTodo(todos, { ...t, content: e.target.value }))}
          />
          <Button onClick={() => setTodos(deleteTodo(todos, t))}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}
