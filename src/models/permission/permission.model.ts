import { BelongsToMany, Column, Default, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

import Role from '../role/role.model';

export enum TYPES {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export interface PermissionAttributes {
  uuid?: string;
  type: TYPES;
}

@Table
export default class Permission extends Model<PermissionAttributes> {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public uuid: string;

  @Unique
  @Column
  public type: string;

  @BelongsToMany(() => Role, 'role_permission', 'permission_id', 'role_id')
  public roles: Role[];
}
