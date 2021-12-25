import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { authDto } from 'src/auth/auth.dto';
interface findUser {
  id: number;
  username: string;
}
@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}
  async create(dto: UserCreateDto) {
    const user = await this.userModel.create(dto);
    return user;
  }
  async find(dto: findUser) {
    const user = await this.userModel.findOne({
      where: { username: dto.username, id: dto.id },
    });
    return user;
  }
  async findById(id: number) {
    const user = await this.userModel.findByPk(id);
    return user;
  }
  async candidate(username: string) {
    const user = await this.userModel.findOne({
      where: { username: username },
    });
    return user;
  }
  async login(dto: authDto) {
    const user = await this.userModel.findOne({
      where: { username: dto.username, password: dto.password },
    });
    return user;
  }
}
