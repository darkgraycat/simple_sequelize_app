import { Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, ForeignKey, Unique } from 'sequelize-typescript'
import Role from './Role.model'

interface UserAttributes {
  name: string
  email: string
  createdAt?: Date
  updatedAt?: Date
}

@Table({ timestamps: true })
export default class User extends Model<UserAttributes> {
  @Column
  public name: string

  @IsEmail
  @Unique
  @Column
  public email: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  @ForeignKey(() => Role)
  public role: Role
}