import sequelize from './sequelize'

import User from './models/User.model'
import Role from './models/Role.model'
import Permission, { OPERATION } from './models/Permission.model'

import chalk from 'chalk'

const testModels = async () => {
  try {

    const user: Role = new Role({ name: 'User' })
    const admin: Role = new Role({ name: 'Admin' })

    const permissionToCreate: Permission = new Permission({ type: OPERATION.CREATE })
    const permissionToRead: Permission = new Permission({ type: OPERATION.READ })
    const permissionToUpdate: Permission = new Permission({ type: OPERATION.UPDATE })
    const permissionToDelete: Permission = new Permission({ type: OPERATION.DELETE })

    const person_1: User = new User({ name: 'Person_A', email: 'person_a@gmail.com' })
    const person_2: User = new User({ name: 'Person_B', email: 'person_b@gmail.com' })
    const person_3: User = new User({ name: 'Person_C', email: 'person_c@gmail.com' })

    await admin.save()
    await user.save()
    await person_1.save()
    await person_2.save()
    await person_3.save()
    await permissionToCreate.save()
    await permissionToRead.save()
    await permissionToDelete.save()
    await permissionToUpdate.save()

    admin.$set('permissions', [permissionToCreate, permissionToDelete, permissionToRead, permissionToUpdate])
    user.$set('permissions', [permissionToRead])

    admin.$set('users', [person_1])
    user.$set('users', [person_2, person_3])

    // await sequelize.query('UPDATE users SET roleId = 2 WHERE id = 1')
    // await sequelize.query('UPDATE users SET roleId = 1 WHERE id = 2')
    // await sequelize.query('UPDATE users SET roleId = 1 WHERE id = 3')

  } catch (err) {
    console.error(chalk.red(err.message))
  }
}


(async () => {
  await sequelize.authenticate()
  await sequelize.sync({ force: true })
  console.log(chalk.black.bgGreen('Sync succes!'))
  await testModels()
  console.log(chalk.black.bgYellow('Done!'))
})()