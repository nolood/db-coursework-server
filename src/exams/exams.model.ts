import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Subject } from '../subjects/subjects.model';
import { Student } from '../students/students.model';
import { ExamType } from '../exam-types/exam-types.model';

@Table({ tableName: 'exams' })
export class Exam extends Model<Exam> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.INTEGER })
  grade: number;

  @ForeignKey(() => ExamType)
  type_id: number;

  @BelongsTo(() => ExamType)
  type: ExamType;

  @ForeignKey(() => Subject)
  @Column({ type: DataTypes.INTEGER })
  subject_id: number;

  @ForeignKey(() => Student)
  @Column({ type: DataTypes.INTEGER })
  student_id: number;
}
