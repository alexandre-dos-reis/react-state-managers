import { Button, Input, Grid } from '@chakra-ui/react';
import { Todo } from '@react-state-managers/types';
import { ChangeEvent, useState, MouseEvent } from 'react';
import { useTodoStore } from '../store';

export function TodoAdd() {
  const emptyTodo: Todo = {
    id: Date.now(),
    content: '',
    createdAt: new Date(),
    updateAt: new Date(),
    isDone: false,
  };

  const onNewTodo = useTodoStore((s) => s.onNew);
  const [newTodo, setNewTodo] = useState<Todo>(emptyTodo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewTodo = (e: MouseEvent) => {
    e.preventDefault();
    onNewTodo(newTodo);
    setNewTodo(emptyTodo);
  };

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo.content}
        name="content"
        onChange={handleChange}
      />
      <Button onClick={handleNewTodo}>Add Todo</Button>
    </Grid>
  );
}
