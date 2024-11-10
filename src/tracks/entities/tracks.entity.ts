import {
  IsDefined,
  IsString,
  IsInt,
  ValidateIf,
  IsUUID,
} from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class Track {
  @IsDefined()
  @IsUUID(4, { each: true })
  id: string;

  @IsDefined()
  @IsString()
  name: string;

  @ValidateIf((_, value) => value !== null)
  @IsString()
  artistId: string | null;

  @ValidateIf((_, value) => value !== null)
  @IsString()
  albumId: string | null;

  @IsDefined()
  @IsInt()
  duration: number;

  constructor(
    name: string,
    duration: number,
    artistId: string | null = null,
    albumId: string | null = null,
  ) {
    this.id = uuidv4();
    this.name = name;
    this.duration = duration;
    this.artistId = artistId;
    this.albumId = albumId;
  }
}
