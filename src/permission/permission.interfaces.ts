import Permission from './permission.model';

export enum TYPES {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export interface IPermissionAttributes {
  uuid?: string;
  type: TYPES;
}

export interface IPermissionService {
  getPermission(id: string): Promise<Permission | null>;
  getAllPermissions(): Promise<Permission[]>;
  createPermission(type: TYPES): Promise<Permission>;
  deletePermission(id: string): Promise<void>;
}

