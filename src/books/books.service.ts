import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: CreateBookDto[] = [];
  create(createBookDto: CreateBookDto) {
    return this.books.push(createBookDto);
  }

  findAll() {
    return this.books;
  }

  findOne(idBook: string) {
    return this.books.find((book) => book.idBook === idBook);
  }

  update(idBook: string, updateBookDto: UpdateBookDto) {
    const indexBook = this.books.findIndex(
      (element) => element.idBook === idBook,
    );
    if (indexBook !== -1) {
      this.books[indexBook] = {
        ...this.books[indexBook],
        ...updateBookDto,
      };
    }
  }
  remove(idBook: string) {
    const indexBook = this.books.findIndex(
      (element) => element.idBook === idBook,
    );

    if (indexBook !== -1) {
      this.books.splice(indexBook, 1);
    }

    return `This action removes a #${idBook} book`;
  }
}
