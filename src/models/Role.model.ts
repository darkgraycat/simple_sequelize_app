import { Table, Model, Column, HasMany, BelongsToMany, Unique } from "sequelize-typescript";
import Permission from "./Permission.model";
import RolePermission from "./RolePermission.model";
import User from "./User.model";

interface RoleAttributes {
  name: string
  users?: User[]
}

@Table
export default class Role extends Model<RoleAttributes> {
  @Unique
  @Column
  public name: string

  @HasMany(() => User)
  public users: User[]

  @BelongsToMany(() => Permission, () => RolePermission)
  public permissions: Permission[]

}