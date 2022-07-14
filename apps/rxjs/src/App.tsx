import { TodoAdd, TodoHeader, TodoList } from './todo/components';

export const App = () => {
  return (
    <>
      <div>
        <TodoHeader />
        {/* <TodoAdd /> */}
      </div>
      <TodoList />
    </>
  );
};
