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
    const query = `SELECT * FROM ${this.tableName};`;
    return this.db.query(query);
  }

  findById(id: number): Promise<any> {
    const query = `SELECT * FROM ${this.tableName} WHERE id = ${id};`;
    return this.db.query(query);
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
    const query = `DELETE FROM ${this.tableName} WHERE id = ${id};`;
    return this.db.query(query);
  }
}
