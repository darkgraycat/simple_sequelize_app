import { Table, Model, Column, HasMany, BelongsToMany, Unique, IsUUID, PrimaryKey, Default } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

import Permission from '../permission/permission.model';
import User from '../user/user.model';
import { RoleAttributes } from './role.interfaces';

@Table
export default class Role extends Model<RoleAttributes> {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public uuid: string;

  @Unique
  @Column
  public name: string;

  @HasMany(() => User)
  public users: User[];

  @BelongsToMany(() => Permission, 'role_permission', 'role_id', 'permission_id')
  public permissions: Permission[];
}
