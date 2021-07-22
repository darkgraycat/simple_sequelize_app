import { RequestHandler } from 'express';

import { addRoleToUser, createUserWithBody } from './user.service';
import { STATUS_CODE } from '../../constants';

export const createUser: RequestHandler = async (req, res) => {
  await createUserWithBody(req.body);
  res.status(STATUS_CODE.CREATED).end();
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    await addRoleToUser(req.params.userId, req.params.roleId);
    res.status(STATUS_CODE.OK).end();
  } catch (e) {
    res.status(STATUS_CODE.BAD_REQUEST).end(e.message);
    console.error(e.message);
  }
};
