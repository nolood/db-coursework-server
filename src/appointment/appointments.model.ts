import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AppointmentsTeachers } from './AppointmentsTeachers.model';
import { Teacher } from '../teachers/teachers.model';

@Table({ tableName: 'appointments' })
export class Appointment extends Model<Appointment> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataTypes.STRING })
  name: string;

  @BelongsToMany(() => Teacher, () => AppointmentsTeachers)
  teachers: Teacher[];
}
