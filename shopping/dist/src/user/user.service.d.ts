import { Model } from 'mongoose';
export declare type User = any;
export declare class UserService {
    private readonly UserModel;
    constructor(UserModel: Model<User>);
    createUser(createCatDto: User): Promise<any>;
    findOne(name: string): Promise<any>;
    findAll(): Promise<User[]>;
    editOne(user: any, body: any): Promise<User>;
}
