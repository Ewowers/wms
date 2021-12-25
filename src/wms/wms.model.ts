import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { WmsDto } from './wms.dto';
@Table({ tableName: 'wms' })
export class WmsModel extends Model<WmsModel, WmsDto> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ allowNull: false, unique: true })
  service: string;
  @Column({ allowNull: false })
  version: string;
  @Column({ allowNull: false, type: DataType.ARRAY(DataType.INTEGER) })
  layers: number[];
  @Column({ type: DataType.TEXT })
  style: string;
  @Column({})
  src: string;
  @Column({})
  width: string;
  @Column({})
  height: string;
  @Column({})
  format: string;
  @Column({ defaultValue: false })
  transparent: boolean;
  @Column({})
  bgColor: string;
  @Column({ defaultValue: 'application/vnd.ogc.se_xml' })
  exceptions: string;
}
