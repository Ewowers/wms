import { Column, Model, Table } from 'sequelize-typescript';
import { UserCreateDto } from './user.dto';
@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, UserCreateDto> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ allowNull: false, unique: true })
  username: string;
  @Column({ allowNull: false })
  password: string;
}
