import express, { Express, Request, Response } from 'express';

import { router as userRouter } from './user/user.routes';
import { router as roleRouter } from './role/role.routes';
import { router as permissionRouter } from './permission/permission.routes';
import { PORT, HOST } from './db/constants';
import { errorHandler, logErrors } from './error_handlers';
import Connection from './db/connection';
import { STATUS_CODE } from './constants';

const app: Express = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/permissions', permissionRouter);

app.all('*', (req: Request, res: Response) => {
  res.status(STATUS_CODE.BAD_REQUEST).send('Error: Bad request (400)');
});

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at http://${HOST}:${PORT}`);
});

Connection.instance.connect();
