import { Application, Request, Response } from 'express';
import { UsersService } from '../services/users.service';
import { pool } from '../database/common/constants';

const usersService = new UsersService(pool);

export const usersController = (app: Application): void => {
  app.get('/users', async (req: Request, res: Response) => {
    const users = await usersService.findAll();
    return res.status(200).json(users);
  });
};
