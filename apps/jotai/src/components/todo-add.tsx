import { Button, Input, Grid } from '@chakra-ui/react';
import { Todo } from '@react-state-managers/types';
import { useAtom } from 'jotai';
import { ChangeEvent } from 'react';
import { addTodoAtom, emptyTodo, newTodoAtom } from '../store';

export function TodoAdd() {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...emptyTodo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo.content}
        name="content"
        onChange={handleChange}
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}
