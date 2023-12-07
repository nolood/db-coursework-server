import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Plan } from '../plans/plans.model';
import { StudyTask } from '../study-task/study-task.model';

@Table({ tableName: 'semesters' })
export class Semester extends Model<Semester> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.INTEGER })
  number: number;

  @HasMany(() => Plan)
  plan: Plan[];

  @HasMany(() => StudyTask)
  studyTasks: StudyTask[];
}
