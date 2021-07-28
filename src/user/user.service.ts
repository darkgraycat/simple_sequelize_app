import User from './user.model';
import RoleService from '../role/role.service';

export default class UserService {

  public static getUser(id: string): Promise<User | null> {
    return User.findByPk(id);
  }

  public static createUser(name: string, email: string): Promise<User> {
    return User.create({ name, email });
  }

  public static async addRoleToUser(roleId: string, userId: string): Promise<void> {
    const user = await UserService.getUser(userId);
    const role = await RoleService.getRole(roleId);
    if (!user || !role) throw new Error(`No user or role`);
    // @ts-ignore
    await user.setRole(role);
  }

}
