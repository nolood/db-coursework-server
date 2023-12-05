import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Department } from '../departaments/departaments.model';
import { Group } from '../groups/groups.model';

@Table({ tableName: 'faculties' })
export class Faculty extends Model<Faculty> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING })
  name: string;

  @HasMany(() => Department)
  departments: Department[];

  @HasMany(() => Group)
  groups: Group[];
}
