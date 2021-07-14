import { Table, Model, Column, HasMany } from "sequelize-typescript";
import User from "./User.model";

interface RoleAttributes {
  name: string
  users: User[]
}

@Table
export default class Role extends Model<RoleAttributes> {
  @Column
  name: string

  @HasMany(() => User)
  users: User[]
}