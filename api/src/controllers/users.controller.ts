import { Application, Request, Response } from 'express';
import { UsersService } from '../services/users.service';

const usersService = new UsersService();

export const usersController = (app: Application): void => {
  app.get('/users', async (req: Request, res: Response) => {
    const users = await usersService.findAll();
    return res.status(200).json(users);
  });
};
