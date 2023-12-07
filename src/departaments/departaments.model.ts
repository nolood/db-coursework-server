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
import { Faculty } from '../faculties/faculties.model';
import { Teacher } from '../teachers/teachers.model';
import { TeachersDepartments } from '../teachers/TeachersDepartments.model';
import { StudyTask } from '../study-task/study-task.model';

@Table({ tableName: 'departments' })
export class Department extends Model<Department> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING })
  name: string;

  @ForeignKey(() => Faculty)
  @Column({ type: DataTypes.INTEGER })
  faculty_id: number;

  @BelongsTo(() => Faculty)
  faculty: Faculty;

  @BelongsToMany(() => Teacher, () => TeachersDepartments)
  teachers: Teacher[];

  @HasMany(() => StudyTask)
  studyTasks: StudyTask[];
}
