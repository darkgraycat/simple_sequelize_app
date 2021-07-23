import { RequestHandler } from 'express';

import { STATUS_CODE } from '../../constants';
import { TYPES } from './permission.interfaces';
import { PermissionService } from './permission.service';

export const getPermissions: RequestHandler = async (req, res) => {
  res.status(STATUS_CODE.OK).send(await PermissionService.getAllPermissions());
};

export const createPermission: RequestHandler = async (req, res) => {
  await PermissionService.createPermission(req.body.type as TYPES);
  res.status(STATUS_CODE.CREATED).end();
};

export const deletePermission: RequestHandler = async (req, res) => {
  try {
    await PermissionService.deletePermission(req.params.permissionId);
    res.status(STATUS_CODE.OK).end();
  } catch (e) {
    res.status(STATUS_CODE.NOT_FOUND).end(e.message);
    console.error(e.message);
  }
};
