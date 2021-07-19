import { BelongsToMany, Column, Model, Table, Unique } from "sequelize-typescript";
import Role from "./Role.model";
import RolePermission from "./RolePermission.model";

export enum OPERATION {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

interface PermissionAttributes {
  type: OPERATION
}

@Table
export default class Permission extends Model<PermissionAttributes> {
  @Unique
  @Column
  public type: string

  @BelongsToMany(() => Role, () => RolePermission)
  public roles: Array<Role & { RolePermission: RolePermission }>
}