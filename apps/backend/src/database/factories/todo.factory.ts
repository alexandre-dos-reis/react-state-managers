import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Todo } from '@react-state-managers/types';

define(Todo, () => {
  const t = new Todo();
  t.content = faker.random.words(10);
  t.updateAt = faker.date.recent();
  t.createdAt = faker.date.past();
  t.isDone = faker.helpers.arrayElement([false, true]);
  return t;
});
