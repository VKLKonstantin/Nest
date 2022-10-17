import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  accountId: string;
  @Prop({ required: true })
  idBook: string;
  @Prop({ required: false })
  title: string;
  @Prop({ required: false })
  description: string;
  @Prop({ required: false })
  authors: string;
  @Prop({ required: false })
  favorite: string;
  @Prop({ required: false })
  fileCover: string;
}
export const BookSchema = SchemaFactory.createForClass(Book);
