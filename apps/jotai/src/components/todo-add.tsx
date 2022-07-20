import { Button, Input, Grid } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { todosAtom } from '../store';
import { addTodo } from '@react-state-managers/types'

export function TodoAdd() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [content, setContent] = useState('');

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button
        onClick={() => {
          setTodos(
            addTodo(todos, {
              id: Date.now(),
              createdAt: new Date(),
              updateAt: new Date(),
              isDone: false,
              content,
            })
          );
          setContent('');
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}
