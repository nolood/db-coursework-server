import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Faculty } from '../faculties/faculties.model';
import { Student } from '../students/students.model';
import { Plan } from '../plans/plans.model';
import { Course } from '../courses/courses.model';
import { StudyTask } from '../study-task/study-task.model';

@Table({ tableName: 'groups' })
export class Group extends Model<Group> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING })
  name: string;

  @ForeignKey(() => Faculty)
  @Column({ type: DataTypes.INTEGER })
  faculty_id: number;

  @BelongsTo(() => Faculty)
  faculty: Faculty;

  @HasMany(() => Student)
  students: Student[];

  @ForeignKey(() => Plan)
  @Column({ type: DataTypes.INTEGER })
  plan_id: number;

  @HasMany(() => Plan)
  plan: Plan[];

  @ForeignKey(() => Course)
  @Column({ type: DataTypes.INTEGER })
  course_id: number;

  @BelongsTo(() => Course)
  course: Course;

  @HasMany(() => StudyTask)
  studyTasks: StudyTask[];
}
