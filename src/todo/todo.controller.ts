import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '@prisma/client';

import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo() {
    return this.todoService.getAllTodo();
  }

  @Get('/:id')
  async getTodo(@Param('id') id: number) {
    return this.todoService.getTodo(id);
  }

  @Post()
  async createTodo(@Body() todoData: Todo) {
    return this.todoService.createTodo(todoData);
  }

  @Put('/:id')
  async updateTodo(@Param('id') id: number) {
    return this.todoService.updateTodo(id);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
