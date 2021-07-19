import { Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, ForeignKey, Unique, BelongsTo } from 'sequelize-typescript'
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
  @Column({ field: 'created_at' })
  public createdAt: Date

  @UpdatedAt
  @Column({ field: 'updated_at' })
  public updatedAt: Date

  @ForeignKey(() => Role)
  @Column({ field: 'role_id' })
  public roleId: number

  @BelongsTo(() => Role)
  public role: Role
}