import { Button, Input, Flex, Checkbox } from '@chakra-ui/react';
import { useTodoStore } from '../store';

export function TodoListItems() {
  const { onDelete, onToggle, onUpdate, todos } = useTodoStore((s) => s);

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
