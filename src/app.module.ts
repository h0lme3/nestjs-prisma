import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService, TodoService, PrismaService],
})
export class AppModule {}
