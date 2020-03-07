import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return { name: user.name, sex: user.sex, id: user._id };
    }
    return null;
  }

  async login(user: User) {
    const payload = user;
    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }

}
