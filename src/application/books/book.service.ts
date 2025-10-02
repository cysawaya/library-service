import { Injectable } from '@nestjs/common';
import { Book } from '../../domain/books/book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findById(id: string): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  rentBook(id: string): string {
    const book = this.findById(id);
    if (!book) {
      return 'Book not found';
    }

    if (!book.isAvailable) {
      return 'Book not available';
    }

    book.isAvailable = false;
    return 'Book rented successfully';
  }
}