import { IUser } from 'apps/api/src/app/users/interfaces/user.interface';

export interface IUsersService {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findOne(options: object): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
  update(id: string, newValue: IUser): Promise<IUser | null>;
  delete(id: string): Promise<string>;
}
