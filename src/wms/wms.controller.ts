import { Controller, Get, Query } from '@nestjs/common';
import { WmsDto, WmsFindDto } from './wms.dto';

@Controller('wms')
export class WmsController {
  @Get('')
  async get(@Query() query: object) {
    let index = 0;
    for (let i in query) {
      index++;
    }
    if (index <= 3) return { message: 'findAll' };
    else return { message: 'findOption' };
  }
}
