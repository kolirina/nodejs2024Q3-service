import { v4 as uuidv4 } from 'uuid';
import { Exclude } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { IUser } from 'src/interfaces';

export class User implements IUser {
  @IsUUID(4, { each: true })
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  login: string;

  @Exclude()
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  version: number;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  constructor(login: string, password: string) {
    this.id = uuidv4();
    this.login = login;
    this.password = password;
    this.version = 1;
    this.createdAt = Date.now();
    this.updatedAt = this.createdAt;
  }
}
