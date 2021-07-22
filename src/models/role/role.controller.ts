import { RequestHandler } from 'express';

import { STATUS_CODE } from '../../constants';
import { createRoleWithPermissions, getAllRoles } from './role.service';

export const getRoles: RequestHandler = async (req, res) => {
  res.status(STATUS_CODE.OK).send(await getAllRoles());
};

export const createRole: RequestHandler = async (req, res) => {
  try {
    await createRoleWithPermissions(
      req.params.roleName,
      req.params.permissionsIds.split(';')
    );
    res.status(STATUS_CODE.CREATED).end();
  } catch (e) {
    res.status(STATUS_CODE.BAD_REQUEST).end(e.message);
    console.error(e.message);
  }
};
