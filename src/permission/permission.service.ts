import { IPermissionService } from './permission.interfaces';
import Permission from './permission.model';

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
