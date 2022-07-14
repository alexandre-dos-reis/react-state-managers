import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Todo } from '@react-state-managers/types';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}

  getAll(): Promise<Todo[]> {
    return this.todoRepo.find();
  }

  getOne(id: number): Promise<Todo | null> {
    return this.todoRepo.findOneBy({
      id,
    });
  }

  createOne(todo: Todo): Promise<Todo> {
    return this.todoRepo.save(todo);
  }

  deleteOne(id: number): Promise<DeleteResult> {
    return this.todoRepo.delete({ id });
  }

  updateOne(todo: Todo): Promise<UpdateResult> {
    return this.todoRepo.update(
      {
        id: todo.id,
      },
      { ...todo }
    );
  }
}
