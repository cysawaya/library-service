import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BookService } from '../../application/books/book.service';

@Module({
  controllers: [BooksController],
  providers: [BookService],
})
export class BooksModule {}
