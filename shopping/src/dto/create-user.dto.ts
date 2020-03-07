import { User } from '../interfaces/user.interface';
import { IsString, IsInt, IsNotEmpty, Min, Max, IsNumber } from 'class-validator';
import { ApiErrorCode } from '../enum/apiCode';

export class AdvUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;
}
