import { ChakraProvider, Box, theme, Heading } from '@chakra-ui/react';
import { TopBar } from './components/top-bar';
import { TodoList } from './components/todo-list';
import { TodoAdd } from './components/todo-add';
import { todosAtom } from './store';
import { useAtom } from 'jotai';

export function App() {
  const [todos] = useAtom(todosAtom);

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <Heading as={'h1'} textAlign="center" mb={5}>
          Jotai
        </Heading>
        <TopBar />
        <TodoList />
        <TodoAdd />
        {JSON.stringify(todos, null, 4)}
      </Box>
    </ChakraProvider>
  );
}
