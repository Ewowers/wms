import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WmsController } from './wms.controller';
import { WmsModel } from './wms.model';
import { WmsService } from './wms.service';

@Module({
  imports: [SequelizeModule.forFeature([WmsModel])],
  controllers: [WmsController],
  providers: [WmsService],
})
export class WmsModule {}
