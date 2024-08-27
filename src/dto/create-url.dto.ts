import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  originalUrl: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  shortUrl: string;
}
