import Permission from '../permission/permission.model';
import Role from './role.model';

export interface IRoleService {
  getRole(id: string): Promise<Role | null>;
  getAllRoles(): Promise<Role[]>;
  createRole(roleName: string, permissionsIds: string[]): Promise<void>;
}

export const RoleService: IRoleService = {
  getRole: (id) => Role.findByPk(id),
  getAllRoles: () => Role.findAll({ include: [Permission] }),
  createRole: async (roleName, permissionsIds) => {
    const role = await Role.create({ name: roleName });
    permissionsIds.map(async (permissionId) => {
      const permission = await Permission.findByPk(permissionId);
      if (!permission) throw new Error(`Invalid permission id: ${permissionId}`);
      // @ts-ignore
      role.addPermission(permission);
    });
  },
};
