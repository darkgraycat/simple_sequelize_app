import { Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, ForeignKey } from 'sequelize-typescript'
import Role from './Role.model'

interface UserAttributes {
  name: string
  email: string
  createdAt?: Date
  updatedAt?: Date
  role?: Role
}

@Table({
  timestamps: true
})
export default class User extends Model<UserAttributes> {
  @Column
  name: string

  @IsEmail
  @Column
  email: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @ForeignKey(() => Role)
  role: Role
}