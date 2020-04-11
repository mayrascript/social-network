import { CreateUserDto } from 'apps/api/src/app/users/dtos/create-user.dto';
import { IUsersService } from 'apps/api/src/app/users/interfaces/user-service.interface';
import { Model, PassportLocalModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<IUser>) {}
  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findOne(options: object): Promise<IUser> {
    return await this.userModel.findOne(options).exec();
  }

  async findById(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }
  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async update(id: string, newValue: IUser): Promise<IUser> {
    const user = await this.userModel.findById(id).exec();

    if (!user._id) {
      debug('user not found');
    }

    await this.userModel.findByIdAndUpdate(id, newValue).exec();
    return await this.userModel.findById(id).exec();
  }
  async delete(id: string): Promise<string> {
    try {
      await this.userModel.findByIdAndRemove(id).exec();
      return 'The user has been deleted';
    }
    catch (err) {
      debug(err);
      return 'The user could not be deleted';
    }
  }
}
