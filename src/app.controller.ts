import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.appService.createUrl(createUrlDto);
  }

  @Get(':shortUrl')
  @Redirect()
  async redirectToOriginalUrl(@Param('shortUrl') shortUrl: string) {
    const urlRecord = await this.appService.getUrl(shortUrl);

    if (!urlRecord) throw new Error('Url not found');

    return { url: urlRecord.originalUrl };
  }
}
