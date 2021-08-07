import Permission from '../permission/permission.model';
import Role from './role.model';

export default class RoleService {

  public static getRole(id: string): Promise<Role | null> {
    return Role.findByPk(id);
  }

  public static getAllRoles(): Promise<Role[]> {
    return Role.findAll({ include: [Permission] });
  }

  public static async createRole(name: string, permissionsIds: string[]): Promise<void> {
    const role = await Role.create({ name });
    permissionsIds.map(async (pid) => {
      const permission = await Permission.findByPk(pid);
      if (!permission) throw new Error(`Invalid permission id: ${pid}`);
      // @ts-ignore
      role.addPermission(permission);
    });
  }

}
