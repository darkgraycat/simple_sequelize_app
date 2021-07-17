import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Permission from "./Permission.model";
import Role from "./Role.model";

@Table
export default class RolePermission extends Model {
  @ForeignKey(() => Role)
  @Column
  public roleId: number

  @ForeignKey(() => Permission)
  @Column
  public permissionId: number
}