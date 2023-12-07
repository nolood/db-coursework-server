import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Plan } from '../plans/plans.model';

@Table({ tableName: 'exam_types' })
export class ExamType extends Model<ExamType> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING })
  name: string;

  @HasMany(() => Plan)
  plans: Plan[];
}
