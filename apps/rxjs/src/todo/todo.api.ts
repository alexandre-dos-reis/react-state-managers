import { environment as env } from '../environments/environment';
import { TodosGetAllResponse } from '@react-state-managers/api-interface';

const todoApi = 'todos';

export const callApiTodos = async (): Promise<TodosGetAllResponse> => {
  return await fetch(`${env.api}/${todoApi}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
};

// export const updateApiProduct = async (product: Product): Promise<Product> => {
//   return new Promise<Product>(() => {});
// };

// export const deleteApiProduct = async (product: Product): Promise<boolean> => {
//   return new Promise<boolean>(() => {});
// };
