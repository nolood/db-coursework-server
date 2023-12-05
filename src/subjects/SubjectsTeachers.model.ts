import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Subject } from './subjects.model';
import { Teacher } from '../teachers/teachers.model';

@Table({ tableName: 'subjects_teachers' })
export class SubjectsTeachers extends Model<SubjectsTeachers> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Subject)
  @Column({ type: DataTypes.INTEGER })
  subject_id: number;

  @ForeignKey(() => Teacher)
  @Column({ type: DataTypes.INTEGER })
  teacher_id: number;

  @BelongsTo(() => Subject)
  subject: Subject;

  @BelongsTo(() => Teacher)
  teacher: Teacher;
}
