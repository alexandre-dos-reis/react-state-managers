import { ChakraProvider, Box, theme, Heading } from '@chakra-ui/react';
import { TopBar } from './components/top-bar';
import { TodoList } from './components/todo-list';
import { TodoAdd } from './components/todo-add';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <Heading as={'h1'} textAlign="center" mb={5}>
          Zustand
        </Heading>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}
