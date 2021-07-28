import { Request, Response } from 'express';

import { STATUS_CODE } from '../constants';
import RoleService from './role.service';

export default class RoleController {

  public static async getRoles(req: Request, res: Response) {
    return res.status(STATUS_CODE.OK).send(await RoleService.getAllRoles());
  }

  public static async createRole(req: Request, res: Response) {
    try {
      await RoleService.createRole(
        req.body.name,
        req.body.permissionsIds
      );
      return res.sendStatus(STATUS_CODE.CREATED);
    } catch (e) {
      console.error(e.message);
      return res.status(STATUS_CODE.BAD_REQUEST).send(e.message);
    }
  }

}
