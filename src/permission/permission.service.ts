import { TYPES } from './permission.interfaces';
import Permission from './permission.model';

export default class PermissionService {

  public static getPermission(id: string): Promise<Permission | null> {
    return Permission.findByPk(id);
  }

  public static getAllPermissions(): Promise<Permission[]> {
    return Permission.findAll();
  }

  public static createPermission(type: TYPES): Promise<Permission> {
    return Permission.create({ type });
  }

  public static async deletePermission(id: string): Promise<void> {
    const permission = await PermissionService.getPermission(id);
    if (!permission) throw new Error(`Permission not found: ${id}`);
    permission.destroy({ force: true });
  }

}
