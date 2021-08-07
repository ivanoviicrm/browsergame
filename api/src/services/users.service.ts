import { User } from '../models/users.model';
import { Users } from '../../data/users';

export class UsersService {
  getAllUsers = () => {
    return Users;
  };

  getUserById = (id: number) => {};

  createUser = (user: User) => {};

  updateUser = (user: User) => {};

  deleteUser = (id: number) => {};
}
