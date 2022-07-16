import { Heading } from '@chakra-ui/react';
import { TodoListItems } from './todo-list-item';

export function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}
