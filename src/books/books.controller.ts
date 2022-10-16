import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('createBook')
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('listBooks')
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':idBook')
  findOne(@Param('idBook') idBook: string) {
    return this.booksService.findOne(idBook);
  }

  @Post('updateBook/:idBook')
  update(
    @Param('idBook') idBook: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(idBook, updateBookDto);
  }

  @Post('deleteBook/:idBook')
  remove(@Param('idBook') idBook: string) {
    return this.booksService.remove(idBook);
  }
}
