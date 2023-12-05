import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Student } from './students.model';
import { Group } from '../groups/groups.model';

@Table({ tableName: 'students_groups' })
export class StudentsGroups extends Model<StudentsGroups> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Student)
  @Column({ type: DataTypes.INTEGER })
  student_id: number;

  @BelongsTo(() => Student)
  student: Student;

  @ForeignKey(() => Group)
  @Column({ type: DataTypes.INTEGER })
  group_id: number;

  @BelongsTo(() => Group)
  group: Group;
}
