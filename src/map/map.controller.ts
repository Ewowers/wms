import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
@Controller('api/map')
export class MapController {
  constructor() {}
  @UseGuards(AuthGuard)
  @Get('/')
  get() {
    return { message: 'ji' };
  }
}
