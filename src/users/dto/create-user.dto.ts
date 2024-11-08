import { IsString, Length } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  login: string;

  @IsString()
  @Length(8, 50)
  password: string;
}
