import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'grades' })
export class Grade extends Model<Grade> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER })
  id: number;
  grade: number;
}
