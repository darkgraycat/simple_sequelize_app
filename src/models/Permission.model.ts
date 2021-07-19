import { BelongsToMany, Column, IsUUID, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import Role from "./Role.model";
import RolePermission from "./RolePermission.model";

export enum OPERATION {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

interface PermissionAttributes {
  uuid: string
  type: OPERATION
}

@Table
export default class Permission extends Model<PermissionAttributes> {

  @IsUUID(4)
  @PrimaryKey
  @Column
  public uuid: string

  @Unique
  @Column
  public type: string

  @BelongsToMany(() => Role, () => RolePermission)
  public roles: Role[]
}