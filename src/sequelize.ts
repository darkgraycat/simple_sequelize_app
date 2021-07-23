import { Sequelize } from 'sequelize-typescript';

import { DATABASE, USERNAME, PASSWORD, DIALECT, HOST } from './constants';
import Permission from './permission/permission.model';
import Role from './role/role.model';
import User from './user/user.model';

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
