import { Sequelize } from 'sequelize-typescript';

import { DATABASE, USERNAME, PASSWORD, DIALECT, HOST } from './constants'

export default new Sequelize({
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  dialect: DIALECT,
  models: [__dirname + '/models'],
  define: {
    timestamps: false
  }
});
