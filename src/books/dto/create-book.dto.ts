export class CreateBookDto {
  accountId: string;
  idBook: string;
  title?: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
}
