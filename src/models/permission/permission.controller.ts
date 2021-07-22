import { RequestHandler } from 'express';
import { STATUS_CODE } from '../../constants';
import { OPERATION } from './permission.model';
import { createPermissionWithOperation, deletePermissionById, getAllPermissions } from './permission.service';

export const getPermissions: RequestHandler = async (req, res) => {
  res.status(STATUS_CODE.OK).send(await getAllPermissions());
};

export const createPermission: RequestHandler = async (req, res) => {
  await createPermissionWithOperation(req.params.operation as OPERATION);
  res.status(STATUS_CODE.CREATED).end();
};

export const deletePermission: RequestHandler = async (req, res) => {
  try {
    await deletePermissionById(req.params.permissionId);
    res.status(STATUS_CODE.OK).end();
  } catch (e) {
    res.status(STATUS_CODE.NOT_FOUND).end(e.message);
    console.error(e.message);
  }
};
