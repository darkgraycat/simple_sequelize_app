import sequelize from './sequelize';
import chalk from 'chalk';

import User from './models/user.model';
import Role from './models/role.model';
import Permission, { OPERATION } from './models/permission.model';

const testModels = async () => {
  try {
    const user: Role = await Role.create({ name: ':User:' });
    const admin: Role = await Role.create({ name: ':Admin:' });

    const users: User[] = [
      await User.create({ name: 'Person_A1', email: 'person_a@gmail.com' }),
      await User.create({ name: 'Person_B1', email: 'person_b@gmail.com' }),
      await User.create({ name: 'Person_C1', email: 'person_c@gmail.com' })
    ];

    interface Permissions {
      create: Permission;
      read: Permission;
      update: Permission;
      delete: Permission;
    }

    const permissions: Permissions = {
      create: await Permission.create({ type: OPERATION.CREATE }),
      read: await Permission.create({ type: OPERATION.READ }),
      update: await Permission.create({ type: OPERATION.UPDATE }),
      delete: await Permission.create({ type: OPERATION.DELETE })
    };

    admin.$set('permissions', [
      permissions.create,
      permissions.read,
      permissions.update,
      permissions.delete,
    ]);

    user.$set('permissions', [
      permissions.read
    ]);

    admin.$set('users', [
      users[0]
    ]);

    user.$set('users', [
      users[1],
      users[2]
    ]);

  } catch (err) {
    console.error(chalk.red(err.message));
  }
};

(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log(chalk.black.bgGreen('Sync succes!'));
  await testModels();
  console.log(chalk.black.bgYellow('Done!'));
})();
