import { DataTypes } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Subject } from '../subjects/subjects.model';
import { Student } from '../students/students.model';

@Table({ tableName: 'exams' })
export class Exam extends Model<Exam> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.INTEGER })
  grade: number;

  @ForeignKey(() => Subject)
  @Column({ type: DataTypes.INTEGER })
  subject_id: number;

  @ForeignKey(() => Student)
  @Column({ type: DataTypes.INTEGER })
  student_id: number;
}
