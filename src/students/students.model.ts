import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { StudentsGroups } from './students-groups.model';
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

  @BelongsToMany(() => Group, () => StudentsGroups)
  groups: Group[];

  @HasMany(() => Exam)
  exams: Exam[];
}
