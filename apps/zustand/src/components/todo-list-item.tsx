import { Button, Input, Flex, Checkbox } from '@chakra-ui/react';
import { useOnDelete, useOnToggle, useTodos, useOnUpdate } from '../store';

export function TodoListItems() {
  const todos = useTodos();
  const onDelete = useOnDelete();
  const onUpdate = useOnUpdate();
  const onToggle = useOnToggle();

  return (
    <>
      {todos.map((t) => (
        <Flex pt={2} key={t.id}>
          <Checkbox isChecked={t.isDone} onChange={() => onToggle(t)} />
          <Input
            mx={2}
            value={t.content}
            onChange={(e) => onUpdate({ ...t, content: e.target.value })}
          />
          <Button onClick={() => onDelete(t)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}
