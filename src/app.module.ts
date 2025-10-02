import { Module } from '@nestjs/common';
import { UsersModule } from './presentation/users/users.module';
import { BooksModule } from './presentation/books/books.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [UsersModule, BooksModule, RabbitMQModule],
})
export class AppModule {}
