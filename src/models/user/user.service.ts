import User, { UserAttributes } from './user.model';

export const getUserById = (id: string): Promise<User | null> => {
  return User.findByPk(id);
};

export const getAllUsers = (): Promise<User[]> => {
  return User.findAll();
};

export const updateUserById = async (
  id: string,
  body: Partial<UserAttributes>
): Promise<User> => {
  const user = await getUserById(id);
  if (!user) {
    throw new Error('User not found');
  }
  Object.assign(user, body);
  await user.save();
  return user;
};

export const createUserWithBody = async (
  body: UserAttributes
): Promise<User> => {
  const user = await User.create(body);
  return user;
};

export const deleteUserById = async (id: string): Promise<void> => {
  const user = await getUserById(id);
  if (!user) {
    throw new Error('User not found');
  }
  user.destroy();
}
