import { Heading } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { todosLengthAtom } from '../store';
import { TodoListItems } from './todo-list-item';

export function TodoList() {
  const [todosLength] = useAtom(todosLengthAtom);
  return (
    <>
      <Heading>
        Todo List - {todosLength} todo{todosLength > 1 ? 's' : ''}
      </Heading>
      <TodoListItems />
    </>
  );
}
