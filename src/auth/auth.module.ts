import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'jwt-secret-key',
      signOptions: { expiresIn: '1440h' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
