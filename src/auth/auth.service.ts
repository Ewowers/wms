import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import { authDto } from './auth.dto';
@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwt: JwtService) {}
  async login(dto: authDto) {
    const user = await this.userService.login(dto);
    const payload = await this.access(user);
    return payload;
  }
  async registr(dto: UserCreateDto) {
    const candidate = await this.userService.candidate(dto.username);
    if (candidate) {
      throw new HttpException('Логин занят', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.create(dto);
    return this.access(user);
  }
  access(user) {
    const payload = { username: user.username, id: user.id };
    const sing = { token: this.jwt.sign(payload) };
    return sing;
  }
}
