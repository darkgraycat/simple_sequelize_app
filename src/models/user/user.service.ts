import User, { UserAttributes } from './user.model';
import { getRoleById } from '../role/role.service';

export const getUserById = (
  id: string
): Promise<User | null> => {
  return User.findByPk(id);
};

export const createUserWithBody = async (
  body: UserAttributes
): Promise<User> => {
  const user = await User.create(body);
  return user;
};

export const addRoleToUser = async (
  id: string,
  roleId: string
): Promise<void> => {
  const user = await getUserById(id);
  const role = await getRoleById(roleId);
  if (!user || !role) throw new Error('No user or role');
  // @ts-ignore
  await role.addUser(user);
};
