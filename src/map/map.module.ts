import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';
import { MapController } from './map.controller';
import { MapService } from './map.service';

@Module({
  imports: [AuthModule],
  controllers: [MapController],
  providers: [MapService],
  exports: [],
})
export class MapModule {}
