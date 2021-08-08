import { User } from '../database/models/users.model';
import { CRUD, pool } from '../database/common/constants';
import { Pool } from 'mariadb';

export class UsersService implements CRUD {
  pool: Pool;
  tableName: string;

  constructor() {
    this.pool = pool;
    this.tableName = 'users';
  }

  findAll(limit?: number | undefined, page?: number | undefined): Promise<any> {
    return pool.query(`SELECT * FROM ${this.tableName};`);
  }

  findById(id: number): Promise<any> {
    return pool.query(`SELECT * FROM ${this.tableName} WHERE 'id' = ${id};`);
  }

  create(user: User): Promise<any> {
    const values = Object.values(user).toLocaleString();

    return pool.query(`
    INSERT INTO ${this.tableName}(id, name, email, password, createdAt, updatedAt, active)
    VALUES(${values});`);
  }

  update(id: number, user: User): Promise<any> {
    const values = Object.values(user).toLocaleString();

    return pool.query(`
      INSERT INTO ${this.tableName}(id, name, email, password, createdAt, updatedAt, active)
      VALUES(${values})
      WHERE 'id' = ${id};`);
  }

  deleteById(id: number): Promise<any> {
    return pool.query(`DELETE FROM ${this.tableName} WHERE 'id' = ${id};`);
  }
}
