import { Sequelize } from 'sequelize-typescript';

import { DATABASE, USERNAME, PASSWORD, DIALECT, HOST } from './constants';
import Permission from './models/permission/permission.model';
import Role from './models/role/role.model';
import User from './models/user/user.model';

export default new Sequelize({
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  dialect: DIALECT,
  models: [User, Role, Permission],
  define: {
    timestamps: false,
  },
});
