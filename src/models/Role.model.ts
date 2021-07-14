import { Table, Model, Column, HasMany } from "sequelize-typescript";
import Permission from "./Permission.model";
import User from "./User.model";

interface RoleAttributes {
  name: string
  users?: User[]
}

@Table
export default class Role extends Model<RoleAttributes> {
  @Column
  public name: string

  @HasMany(() => User)
  public users: User[]

  @HasMany(() => Permission)
  public permissions: Permission[]

}