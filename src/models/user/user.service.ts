import User from './user.model';
import { RoleService } from '../role/role.service';

export interface IUserService {
  getUser(id: string): Promise<User | null>;
  createUser(name: string, email: string): Promise<User>;
  addRoleToUser(roleId: string, userId: string): Promise<void>;
}

export const UserService: IUserService = {
  getUser: (id) => User.findByPk(id),
  createUser: async (name, email) => await User.create({ name, email }),
  addRoleToUser: async (roleId, userId) => {
    const role = await RoleService.getRole(roleId);
    const user = await UserService.getUser(userId);
    if (!user || !role) throw new Error('No user or role');
    // @ts-ignore
    await role.addUser(user);
  },
};
