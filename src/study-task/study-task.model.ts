import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Subject } from '../subjects/subjects.model';
import { Group } from '../groups/groups.model';
import { Semester } from '../semester/semester.model';
import { Department } from '../departaments/departaments.model';

@Table({ tableName: 'study_tasks' })
export class StudyTask extends Model<StudyTask> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Subject)
  @Column({ type: DataTypes.INTEGER })
  subject_id: number;

  @BelongsTo(() => Subject)
  subject: Subject;

  @ForeignKey(() => Group)
  @Column({ type: DataTypes.INTEGER })
  group_id: number;

  @BelongsTo(() => Group)
  group: Group;

  @ForeignKey(() => Semester)
  @Column({ type: DataTypes.INTEGER })
  semester_id: number;

  @BelongsTo(() => Semester)
  semester: Semester;

  @ForeignKey(() => Department)
  @Column({ type: DataTypes.INTEGER })
  department_id: number;

  @BelongsTo(() => Department)
  department: Department;
}
