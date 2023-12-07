import {
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Plan } from '../plans/plans.model';
import { Exam } from '../exams/exams.model';
import { Teacher } from '../teachers/teachers.model';
import { SubjectsTeachers } from './subjects-teachers.model';
import { StudyTask } from '../study-task/study-task.model';

@Table({ tableName: 'subjects' })
export class Subject extends Model<Subject> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING })
  name: string;

  @ForeignKey(() => Plan)
  @Column({ type: DataTypes.INTEGER })
  plan_id: number;

  @HasMany(() => Plan)
  plan: Plan[];

  @HasMany(() => Exam)
  exams: Exam[];

  @BelongsToMany(() => Teacher, () => SubjectsTeachers)
  teachers: Teacher[];

  @HasMany(() => StudyTask)
  studyTasks: StudyTask[];
}
