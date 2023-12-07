import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Group } from '../groups/groups.model';
import { Exam } from '../exams/exams.model';
import { Gender } from '../genders/genders.model';

@Table({ tableName: 'students' })
export class Student extends Model<Student> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING(15) })
  firstname: string;
  @Column({ type: DataTypes.STRING(36) })
  lastname: string;

  @ForeignKey(() => Gender)
  @Column({ type: DataTypes.INTEGER })
  gender_id: number;

  @BelongsTo(() => Gender)
  gender: Gender;

  @Column({ type: DataTypes.DATE })
  recruitment_year: Date;
  @Column({ type: DataTypes.INTEGER })
  age: number;

  @ForeignKey(() => Group)
  @Column({ type: DataTypes.INTEGER })
  group_id: number;

  @BelongsTo(() => Group)
  group: Group;

  @HasMany(() => Exam)
  exams: Exam[];
}
