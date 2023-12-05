import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'teachers_workload' })
export class TeachersWorkload extends Model<TeachersWorkload> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
}
