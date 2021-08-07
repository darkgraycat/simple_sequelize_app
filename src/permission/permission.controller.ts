import { Request, Response } from 'express';

import { STATUS_CODE } from '../constants';
import { TYPES } from './permission.interfaces';
import PermissionService from './permission.service';

export default class PermissionController {

  public static async getPermissions(req: Request, res: Response) {
    return res.status(STATUS_CODE.OK).send(await PermissionService.getAllPermissions());
  }

  public static async createPermission(req: Request, res: Response) {
    await PermissionService.createPermission(req.body.type as TYPES);
    return res.sendStatus(STATUS_CODE.CREATED);
  }

  public static async deletePermission(req: Request, res: Response) {
    try {
      await PermissionService.deletePermission(req.params.permissionId);
      return res.sendStatus(STATUS_CODE.OK);
    } catch (e) {
      console.error(e.message);
      return res.status(STATUS_CODE.NOT_FOUND).send(e.message);
    }
  }

}
