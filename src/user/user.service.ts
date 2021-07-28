import User from './user.model';
import { RoleService } from '../role/role.service';
import { IUserService } from './user.interfaces';

export const UserService: IUserService = {
  getUser: (id) => User.findByPk(id),
  createUser: async (name, email) => await User.create({ name, email }),
  addRoleToUser: async (roleId, userId) => {
    const role = await RoleService.getRole(roleId);
    const user = await UserService.getUser(userId);
    if (!user || !role) throw new Error('No user or role');
    // @ts-ignore
    await user.setRole(role);
  },
};
