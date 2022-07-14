import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from '@react-state-managers/types';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll() {
    return {
      todos: await this.todoService.getAll(),
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return {
      deleteResult: await this.todoService.deleteOne(id),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() todo: Todo) {
    return {
      updateResult: await this.todoService.updateOne(todo),
    };
  }

  @Post()
  async create(@Body() todo: Todo) {
    return {
      tweet: await this.todoService.createOne(todo),
    };
  }
}
