import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Group } from '../groups/groups.model';
import { Subject } from '../subjects/subjects.model';
import { Course } from '../courses/courses.model';
import { Semester } from '../semester/semester.model';
import { ExamType } from '../exam-types/exam-types.model';
import { ClassType } from '../class-types/class-type.mode';

@Table({ tableName: 'plans' })
export class Plan extends Model<Plan> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.INTEGER })
  hours: number;

  @ForeignKey(() => Semester)
  @Column({ type: DataTypes.INTEGER })
  semester_id: number;

  @BelongsTo(() => Semester)
  semester: Semester;

  @ForeignKey(() => Course)
  @Column({ type: DataTypes.INTEGER })
  course_id: number;

  @BelongsTo(() => Course)
  course: Course;

  @ForeignKey(() => Group)
  @Column({ type: DataTypes.INTEGER })
  group_id: number;

  @BelongsTo(() => Group)
  group: Group;

  @ForeignKey(() => Subject)
  @Column({ type: DataTypes.INTEGER })
  subject_id: number;

  @BelongsTo(() => Subject)
  subject: Subject;

  @ForeignKey(() => ClassType)
  @Column({ type: DataTypes.INTEGER })
  type_id: number;

  @BelongsTo(() => ClassType)
  type: ClassType;

  @ForeignKey(() => ExamType)
  @Column({ type: DataTypes.INTEGER })
  control_id: number;

  @BelongsTo(() => ExamType)
  control: ExamType;

  @Column({ type: DataTypes.INTEGER })
  recruitment_year: number;
}
