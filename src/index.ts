import express, { Express } from 'express'
import { Sequelize } from 'sequelize-typescript'
import User from './models/User.model'


// const PORT: string = process.env.PORT || '8080'

// const app: Express = express()

// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome!' })
// })

// app.listen(PORT, () => {
//   console.log(`Server running at ${PORT}`)
// })

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

const user = new User({
  name: 'Another',
  email: 'some@gmail.com'
})


sequelize.sync()
  .then(() => console.log('Sync succes!'))
  .catch((err: Error) => console.log(err.message))
