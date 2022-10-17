import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './models/books-schema';

@Injectable()
export class BooksService {
  // private books: CreateBookDto[] = [];
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) { }
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true,
    });
  }
  async remove(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id);
  }
}
