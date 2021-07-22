import Permission from '../permission/permission.model';
import Role from './role.model';

export const getRoleById = (id: string): Promise<Role | null> => {
  return Role.findByPk(id);
};

export const getAllRoles = (): Promise<Role[]> => {
  return Role.findAll({ include: [Permission] });
}

export const createRoleWithPermissions = async (
  roleName: string,
  permissionsIds: string[]
): Promise<void> => {
  const role = await Role.create({ name: roleName });
  permissionsIds.map(async (permissionId: string) => {
    const permission = await Permission.findByPk(permissionId);
    if (!permission) throw new Error(`Invalid permission id: ${permissionId}`);
    // @ts-ignore
    role.addPermission(permission);
  });
};
