import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Appointment } from '../appointment/appointments.model';
import { AppointmentsTeachers } from '../appointment/AppointmentsTeachers.model';
import { Department } from '../departaments/departaments.model';
import { TeachersDepartments } from './TeachersDepartments.model';
import { Subject } from '../subjects/subjects.model';
import { SubjectsTeachers } from '../subjects/subjects-teachers.model';
import { Gender } from '../genders/genders.model';

@Table({ tableName: 'teachers' })
export class Teacher extends Model<Teacher> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING })
  firstname: string;
  @Column({ type: DataTypes.STRING })
  lastname: string;

  @ForeignKey(() => Gender)
  @Column({ type: DataTypes.INTEGER })
  gender_id: string;

  @BelongsTo(() => Gender)
  gender: Gender;

  @Column({ type: DataTypes.DATE })
  birthdate: Date;
  @Column({ type: DataTypes.INTEGER })
  age: number;
  @Column({ type: DataTypes.INTEGER })
  salary: number;

  @BelongsToMany(() => Appointment, () => AppointmentsTeachers)
  appointments: Appointment[];

  @BelongsToMany(() => Department, () => TeachersDepartments)
  departments: Department[];

  @BelongsToMany(() => Subject, () => SubjectsTeachers)
  subjects: Subject[];
}
