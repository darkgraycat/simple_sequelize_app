import Permission, { TYPES } from './permission.model';

export interface IPermissionService {
  getPermission(id: string): Promise<Permission | null>;
  getAllPermissions(): Promise<Permission[]>;
  createPermission(type: TYPES): Promise<Permission>;
  deletePermission(id: string): Promise<void>;
}

export const PermissionService: IPermissionService = {
  getPermission: (id) => Permission.findByPk(id),
  getAllPermissions: () => Permission.findAll(),
  createPermission: async (type) => await Permission.create({ type }),
  deletePermission: async (id) => {
    const permission = await PermissionService.getPermission(id);
    if (!permission) throw new Error(`Permission not found: ${id}`);
    permission.destroy({ force: true });
  },
};
