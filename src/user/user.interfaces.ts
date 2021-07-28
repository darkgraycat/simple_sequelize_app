import User from './user.model';

export interface IUserAttributes {
  uuid?: string;
  name: string;
  email: string;
}

export interface IUserService {
  getUser(id: string): Promise<User | null>;
  createUser(name: string, email: string): Promise<User>;
  addRoleToUser(roleId: string, userId: string): Promise<void>;
}
