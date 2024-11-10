import {
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateIf,
  IsInt,
} from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateIf((_, value) => value !== null)
  @IsString()
  @IsUUID(4, { each: true })
  artistId: string | null;

  @ValidateIf((_, value) => value !== null)
  @IsString()
  @IsUUID(4, { each: true })
  albumId: string | null;

  @IsInt()
  duration: number;
}
