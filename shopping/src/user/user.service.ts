import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export type User = any;

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private readonly UserModel: Model<User>) {
  }

  async createUser(createCatDto: User): Promise<any> {

    const result = await this.findOne(createCatDto.name);
    if (result) {
      throw new HttpException(
        {
          msgCode: '400',
          msg: '该用户已经创建',
        }, 200,
      );
    }
    const createdUser = new this.UserModel(createCatDto);
    return await createdUser.save();
  }

  async findOne(name: string): Promise<any> {
    return await this.UserModel.findOne({ name });
  }

  async findAll(): Promise<User[]> {
    return await this.UserModel.find().select('-password');
  }

  async editOne(user: any, body): Promise<User> {
    const result = await this.UserModel.findByIdAndUpdate(body._id, body);
    return result;
  }
}
