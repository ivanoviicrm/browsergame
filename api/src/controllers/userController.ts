import { Application, Request, Response } from 'express';
import { Users } from '../../data/users';

export const userController = (app: Application): void => {
  app.get('/user', (req: Request, res: Response) => {
    return res.status(200).json(Users);
  });
};
