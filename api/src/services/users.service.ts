import { User } from '../database/models/users.model';
import { CRUD } from '../database/common/constants';
import { Pool } from 'mariadb';

export class UsersService implements CRUD {
  db: Pool;
  tableName: string;

  constructor(pool: Pool) {
    this.db = pool;
    this.tableName = 'users';
  }

  findAll(limit?: number | undefined, page?: number | undefined): Promise<any> {
    return this.db.query(`SELECT * FROM ${this.tableName};`);
  }

  findById(id: number): Promise<any> {
    return this.db.query(`SELECT * FROM ${this.tableName} WHERE 'id' = ${id};`);
  }

  create(user: User): Promise<any> {
    const values = Object.values(user).toLocaleString();

    return this.db.query(`
    INSERT INTO ${this.tableName}(id, name, email, password, createdAt, updatedAt, active)
    VALUES(${values});`);
  }

  update(id: number, user: User): Promise<any> {
    const values = Object.values(user).toLocaleString();

    return this.db.query(`
      INSERT INTO ${this.tableName}(id, name, email, password, createdAt, updatedAt, active)
      VALUES(${values})
      WHERE 'id' = ${id};`);
  }

  deleteById(id: number): Promise<any> {
    return this.db.query(`DELETE FROM ${this.tableName} WHERE 'id' = ${id};`);
  }
}
