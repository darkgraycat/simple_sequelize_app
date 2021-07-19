import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Permission from "./Permission.model";
import Role from "./Role.model";

/*
  same as original example
  https://github.com/RobinBuschmann/sequelize-typescript-example/blob/master/lib/models/MovieActor.ts
*/

@Table
export default class RolePermission extends Model<RolePermission> {
  @ForeignKey(() => Role)
  @Column({ field: 'role_uuid' })
  public roleUuid: string

  @ForeignKey(() => Permission)
  @Column({ field: 'permission_uuid' })
  public permissionUuid: string
}