import { Application, Request, Response } from 'express';
import { UsersService } from '../services/users.service';

const usersService = new UsersService();

export const usersController = (app: Application): void => {
  app.get('/users', (req: Request, res: Response) => {
    const users = usersService.getAllUsers();
    return res.status(200).json(users);
  });
};
