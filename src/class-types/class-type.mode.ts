import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Plan } from '../plans/plans.model';

@Table({ tableName: 'class_types' })
export class ClassType extends Model<ClassType> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING })
  name: string;

  @HasMany(() => Plan)
  plans: Plan[];
}
