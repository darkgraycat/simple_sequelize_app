import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Role from "./Role.model";

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
  @Column
  public type: string

  @ForeignKey(() => Role)
  public roles: Role[]
}