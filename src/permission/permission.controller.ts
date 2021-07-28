import { RequestHandler } from 'express';

import { STATUS_CODE } from '../constants';
import { TYPES } from './permission.interfaces';
import { PermissionService } from './permission.service';

export const getPermissions: RequestHandler = async (req, res) => {
  return res.status(STATUS_CODE.OK).send(await PermissionService.getAllPermissions());
};

export const createPermission: RequestHandler = async (req, res) => {
  await PermissionService.createPermission(req.body.type as TYPES);
  return res.sendStatus(STATUS_CODE.CREATED);
};

export const deletePermission: RequestHandler = async (req, res) => {
  try {
    await PermissionService.deletePermission(req.params.permissionId);
    return res.sendStatus(STATUS_CODE.OK);
  } catch (e) {
    console.error(e.message);
    return res.status(STATUS_CODE.NOT_FOUND).send(e.message);
  }
};
