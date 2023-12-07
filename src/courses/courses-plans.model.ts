import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Course } from './courses.model';
import { Plan } from '../plans/plans.model';

@Table({ tableName: 'courses_plans' })
export class CoursesPlans extends Model<CoursesPlans> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Course)
  @Column({ type: DataTypes.INTEGER })
  course_id: number;

  @ForeignKey(() => Plan)
  @Column({ type: DataTypes.INTEGER })
  plan_id: number;
}
