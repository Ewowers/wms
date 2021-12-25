import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/user/user.dto';
import { authDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @Post('/')
  login(@Body() dto: authDto) {
    return this.service.login(dto);
  }
  @Post('/registration')
  registration(@Body() dto: UserCreateDto) {
    return this.service.registr(dto);
  }
}
