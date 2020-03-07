import { UserService } from './user.service';
import { AdvUserDto } from '../dto/create-user.dto';
import { User } from '../interfaces/user.interface';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findUser(createCatDto: AdvUserDto): any;
    getAllUser(): Promise<User[]>;
    editOneUser(req: any, body: User): Promise<User[]>;
}
