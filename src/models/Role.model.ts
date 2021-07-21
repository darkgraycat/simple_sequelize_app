import { Table, Model, Column, HasMany, BelongsToMany, Unique, IsUUID, PrimaryKey, Default } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

import Permission from './permission.model';
import User from './user.model';

interface RoleAttributes {
  uuid?: string;
  name: string;
  fuck?: () => string;
}

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
