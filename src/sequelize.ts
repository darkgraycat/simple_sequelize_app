import { Sequelize } from 'sequelize-typescript'

export default new Sequelize({
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