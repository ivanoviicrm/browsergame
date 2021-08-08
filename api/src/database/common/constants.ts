import { CONFIG } from '../../config/config';
import * as mariaDB from 'mariadb';

export const pool = Object.freeze(
  mariaDB.createPool({
    host: CONFIG.MARIADB.HOST,
    user: CONFIG.MARIADB.USER,
    password: CONFIG.MARIADB.PASSWORD,
    database: CONFIG.MARIADB.DATABASE_NAME,
  })
);

export interface CRUD {
  findAll: (limit?: number, page?: number) => Promise<any>;
  findById: (id: any) => Promise<any>;
  create: (resource: any) => Promise<any>;
  update: (id: any, resource: any) => Promise<any>;
  deleteById: (id: any) => Promise<any>;
}
