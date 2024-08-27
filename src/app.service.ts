import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async createUrl(createUrlDto: CreateUrlDto) {
    const { originalUrl, shortUrl } = createUrlDto;

    const url = await this.prisma.url.create({
      data: {
        originalUrl,
        shortUrl,
      },
    });

    return url;
  }

  async getUrl(url: string) {
    const result = await this.prisma.url.findUnique({
      where: {
        shortUrl: url,
      },
    });
    return result;
  }
}
