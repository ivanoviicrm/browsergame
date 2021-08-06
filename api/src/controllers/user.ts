import { Application, Request, Response } from 'express';

export const userController = (app: Application): void => {
  app.get('/user', (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Hello World!' });
  });
};
