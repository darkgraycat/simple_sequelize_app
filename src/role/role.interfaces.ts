import Role from './role.model';

export interface RoleAttributes {
  uuid?: string;
  name: string;
}

export interface IRoleService {
  getRole(id: string): Promise<Role | null>;
  getAllRoles(): Promise<Role[]>;
  createRole(name: string, permissionsIds: string[]): Promise<void>;
}
