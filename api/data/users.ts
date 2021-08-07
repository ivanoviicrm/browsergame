import { User } from '../src/models/users.model';

export const Users: User[] = [
  {
    id: Date.now(),
    name: 'John',
    email: 'jhondoe@gmail.com',
    password: '123456',
    createdAt: new Date(),
    updatedAt: new Date(),
    active: true,
  },
];
