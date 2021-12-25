import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user/user.model';
import { MapModule } from './map/map.module';
import { WmsModule } from './wms/wms.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'wms',
      models: [UserModel],
      autoLoadModels: true,
    }),
    UserModule,
    AuthModule,
    MapModule,
    WmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
