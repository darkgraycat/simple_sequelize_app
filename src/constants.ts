import { Dialect } from 'sequelize';

export const DATABASE: string = 'usersdb';
export const USERNAME: string = 'root';
export const PASSWORD: string = 'msql1234';
export const DIALECT: Dialect = 'mysql';
export const HOST: string = 'localhost';
export const PORT: string = '3000';

export enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
}

