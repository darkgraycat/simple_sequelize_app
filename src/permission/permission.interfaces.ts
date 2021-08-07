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
