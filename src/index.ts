import express, { Express, Request, Response } from 'express';

import sequelize from './sequelize';
import { router as userRouter } from './models/user/user.routes';
import { router as roleRouter } from './models/role/role.routes';
import { router as permissionRouter } from './models/permission/permission.routes';
import { PORT, HOST } from './constants';

const app: Express = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/permissions', permissionRouter);

app.all('*', (req: Request, res: Response) => {
  res.status(400).send('Error: Bad request (400)');
});

app.listen(PORT, () => {
  console.log(`Server started at http://${HOST}:${PORT}`);
});

(async () => {
  await sequelize.authenticate();
  await sequelize.sync();
})();
