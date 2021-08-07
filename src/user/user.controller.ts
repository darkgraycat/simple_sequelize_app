import { Request, Response } from 'express';

import UserService from './user.service';
import { STATUS_CODE } from '../constants';

export default class UserController {
  public static async getUser(req: Request, res: Response) {
    return res.status(STATUS_CODE.OK).send(await UserService.getUser(req.params.userId));
  }

  public static async isAdmin(req: Request, res: Response) {
    const user = await UserService.getUser(req.params.userId);
    return res.status(STATUS_CODE.OK).send(user?.role.name === 'Admin');
  }

  public static async createUser(req: Request, res: Response) {
    await UserService.createUser(req.body.name, req.body.email);
    return res.sendStatus(STATUS_CODE.CREATED);
  }

  public static async updateUser(req: Request, res: Response) {
    try {
      await UserService.addRoleToUser(req.body.roleId, req.body.userId);
      return res.sendStatus(STATUS_CODE.OK);
    } catch (e) {
      console.error(e.message);
      return res.status(STATUS_CODE.BAD_REQUEST).send(e.message);
    }
  }

}
