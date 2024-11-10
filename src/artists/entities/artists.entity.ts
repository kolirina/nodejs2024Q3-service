import { IsNotEmpty, IsBoolean, IsString, IsUUID } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { IArtist } from 'src/interfaces';

export class Artist implements IArtist {
  @IsUUID(4, { each: true })
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  grammy: boolean;

  constructor(name: string, grammy = false) {
    this.id = uuidv4();
    this.name = name;
    this.grammy = grammy;
  }
}
