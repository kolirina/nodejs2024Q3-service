import {
  IsNotEmpty,
  IsUUID,
  IsString,
  IsInt,
  ValidateIf,
} from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class Album {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  year: number;

  @ValidateIf((_, value) => value !== null)
  @IsString()
  @IsUUID(4, { each: true })
  artistId: string | null;

  constructor(name: string, year: number, artistId: string | null = null) {
    this.id = uuidv4();
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
