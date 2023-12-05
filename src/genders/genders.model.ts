import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'genders' })
export class Gender extends Model<Gender> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER })
  id: number;

  @Column({ type: DataTypes.STRING })
  name: string;
}
