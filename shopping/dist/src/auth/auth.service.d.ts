import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../interfaces/user.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(name: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        access_token: any;
        user: User;
    }>;
}
