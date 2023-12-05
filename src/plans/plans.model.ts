import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Group } from '../groups/groups.model';
import { Subject } from '../subjects/subjects.model';

@Table({ tableName: 'plans' })
export class Plan extends Model<Plan> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.INTEGER })
  course: number;
  @Column({ type: DataTypes.INTEGER })
  semester: number;
  @Column({ type: DataTypes.INTEGER })
  lecture_hours: number;
  @Column({ type: DataTypes.INTEGER })
  seminar_hours: number;
  @Column({ type: DataTypes.INTEGER })
  lab_hours: number;
  @Column({ type: DataTypes.INTEGER })
  course_work_hours: number;
  @Column({ type: DataTypes.INTEGER })
  final_work_hours: number;

  @HasMany(() => Group)
  group: Group[];

  @HasMany(() => Subject)
  subject: Subject[];

  // control_form: number;
}
