import { DataTypes } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Group } from '../groups/groups.model';

@Table({ tableName: 'courses' })
export class Course extends Model<Course> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING })
  number: number;

  @HasMany(() => Group)
  groups: Group[];
}
