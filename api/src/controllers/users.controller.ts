import { Application, Request, Response } from 'express';
import { UsersService } from '../services/users.service';
import { pool } from '../database/common/constants';

const usersService = new UsersService(pool);

export const usersController = (app: Application): void => {
  app.get('/users', async (req: Request, res: Response) => {
    const users = await usersService.findAll();
    return res.status(200).json(users);
  });

  app.get('/users/:id', async (req: Request, res: Response) => {
    if (!req.params?.id || isNaN(+req.params?.id)) {
      return res.status(400).json({ message: 'bad request' });
    }

    const users = await usersService.findById(+req.params.id);
    return res.status(200).json(users);
  });

  app.post('/users', async (req: Request, res: Response) => {
    if (!req.body) {
      return res.status(400).json({ message: 'bad request' });
    }

    const users = await usersService.create(req.body);
    return res.status(200).json(users);
  });
};
