import { BelongsToMany, Column, Default, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

import Role from './role.model';

export enum OPERATION {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

interface PermissionAttributes {
  uuid?: string;
  type: OPERATION;
  roles?: Role[];
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
