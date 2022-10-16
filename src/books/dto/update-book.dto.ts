import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  title?: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
}
