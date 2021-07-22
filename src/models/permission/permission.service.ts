
// export const getRoleById = (id: string): Promise<Role | null> => {
//   return Role.findByPk(id);
// };

import Permission, { OPERATION } from './permission.model';

// export const getAllRoles = (): Promise<Role[]> => {
//   return Role.findAll({ include: [Permission] });
// }

// export const createRoleWithPermissions = async (
//   roleName: string,
//   permissionsIds: string[]
// ): Promise<void> => {
//   const role = await Role.create({ name: roleName });
//   permissionsIds.map((permissionId: string) => {
//     const permission = Permission.findByPk(permissionId);
//     if (!permission) throw new Error(`Invalid permission id: ${permissionId}`);
//     // @ts-ignore
//     role.addPermission(permission);
//   });
// };

export const getPermissionById = (
  permissionId: string
): Promise<Permission | null> => {
  return Permission.findByPk(permissionId);
}

export const getAllPermissions = (): Promise<Permission[]> => {
  return Permission.findAll();
}

export const createPermissionWithOperation = async (
  operation: OPERATION
): Promise<void> => {
  await Permission.create({ type: operation });
}

export const deletePermissionById = async (
  permissionId: string
): Promise<void> => {
  const permission = await getPermissionById(permissionId);
  if (!permission) throw new Error(`Permission not found: ${permissionId}`);
  permission.destroy({ force: true });
}
