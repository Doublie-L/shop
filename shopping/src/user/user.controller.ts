import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AdvUserDto } from '../dto/create-user.dto';
import { User } from '../interfaces/user.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Post('add')
  findUser(@Body() createCatDto: AdvUserDto): any {
    return this.userService.createUser(createCatDto);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('edit')
  @UseGuards(JwtAuthGuard)
  editOneUser(@Request() req, @Body() body: User): Promise<User[]> {
    return this.userService.editOne(req.user, body);
  }
}
