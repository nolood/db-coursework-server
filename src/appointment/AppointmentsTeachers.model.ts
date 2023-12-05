import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Appointment } from './appointments.model';
import { Teacher } from '../teachers/teachers.model';

@Table({ tableName: 'appointments_teachers' })
export class AppointmentsTeachers extends Model<AppointmentsTeachers> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Appointment)
  @Column({ type: DataTypes.INTEGER })
  appointment_id: number;

  @ForeignKey(() => Teacher)
  @Column({ type: DataTypes.INTEGER })
  teacher_id: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @BelongsTo(() => Appointment)
  appointment: Appointment;
}
