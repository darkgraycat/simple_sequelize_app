import { RequestHandler } from 'express';

import { STATUS_CODE } from '../constants';
import { RoleService } from './role.service';

export const getRoles: RequestHandler = async (req, res) => {
  res.status(STATUS_CODE.OK).send(await RoleService.getAllRoles());
};

export const createRole: RequestHandler = async (req, res) => {
  try {
    await RoleService.createRole(
      req.body.name,
      req.body.permissionsIds
    );
    return res.status(STATUS_CODE.CREATED);
  } catch (e) {
    console.error(e.message);
    return res.status(STATUS_CODE.BAD_REQUEST).send(e.message);
  }
};
