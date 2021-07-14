import { Sequelize } from 'sequelize-typescript'
import User from './models/User.model'
import Role from './models/Role.model'
import Permission, { OPERATION } from './models/Permission.model'

import chalk from 'chalk'

const sequelize: Sequelize = new Sequelize({
  database: 'usersdb',
  username: 'root',
  password: 'msql1234',
  host: 'localhost',
  dialect: 'mysql',
  models: [__dirname + '/models'],
  define: {
    timestamps: false
  }
})

const permissionToCreate = new Permission({ type: OPERATION.CREATE })
const permissionToRead = new Permission({ type: OPERATION.READ })
const permissionToUpdate = new Permission({ type: OPERATION.UPDATE })
const permissionToDelete = new Permission({ type: OPERATION.DELETE })

const admin: Role = new Role({ name: 'Admin' })
admin.$add('permissions', permissionToCreate)
admin.$add('permissions', permissionToRead)
admin.$add('permissions', permissionToUpdate)
admin.$add('permissions', permissionToDelete)

const user: Role = new Role({ name: 'User' })
user.$add('permissions', new Permission({ type: OPERATION.READ }))

const person_1: User = new User({
  name: 'Person_A',
  email: 'person_a@gmail.com',
})

const person_2: User = new User({
  name: 'Person_B',
  email: 'person_b@gmail.com'
})

admin.$add('users', person_1)
user.$add('users', person_2)



permissionToCreate.save()
permissionToDelete.save()
permissionToDelete.save()
permissionToUpdate.save()

admin.save()
user.save()

person_1.save()
person_2.save()

sequelize.sync()
  .then(() => console.log(chalk.black.bgGreen('Sync succes!')))
  .catch((err: Error) => console.log(err.message))
