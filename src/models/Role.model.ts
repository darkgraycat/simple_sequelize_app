import { Table, Model, Column, HasMany, BelongsToMany, Unique, IsUUID, PrimaryKey } from "sequelize-typescript";
import Permission from "./Permission.model";
import User from "./User.model";

interface RoleAttributes {
  uuid: string
  name: string
  users?: User[]
}

@Table
export default class Role extends Model<RoleAttributes> {

  @IsUUID(4)
  @PrimaryKey
  @Column
  public uuid: string

  @Unique
  @Column
  public name: string

  @HasMany(() => User)
  public users: User[]

  @BelongsToMany(() => Permission, 'role_permission', 'permission_id', 'role_id')
  public permissions: Permission[]

}