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
  @Column
  public roleId: number

  @ForeignKey(() => Permission)
  @Column
  public permissionId: number
}