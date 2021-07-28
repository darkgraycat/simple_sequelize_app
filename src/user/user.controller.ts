import { RequestHandler } from 'express';

import { UserService } from './user.service';
import { STATUS_CODE } from '../constants';

export const createUser: RequestHandler = async (req, res) => {
  await UserService.createUser(req.body.name, req.body.email);
  res.status(STATUS_CODE.CREATED).end();
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    await UserService.addRoleToUser(req.body.roleId, req.body.userId);
    return res.status(STATUS_CODE.OK);
  } catch (e) {
    console.error(e.message);
    return res.status(STATUS_CODE.BAD_REQUEST).send(e.message);
  }
};
