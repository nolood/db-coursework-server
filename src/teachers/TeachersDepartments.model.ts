import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Teacher } from './teachers.model';
import { Department } from '../departaments/departaments.model';

@Table({ tableName: 'teachers_departments' })
export class TeachersDepartments extends Model<TeachersDepartments> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Teacher)
  @Column({ type: DataTypes.INTEGER })
  teacher_id: number;

  @ForeignKey(() => Department)
  @Column({ type: DataTypes.INTEGER })
  department_id: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @BelongsTo(() => Department)
  department: Department;
}
