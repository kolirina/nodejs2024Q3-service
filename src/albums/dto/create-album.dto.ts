import {
  ValidateIf,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsInt,
} from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  year: number;

  @ValidateIf((_, value) => value !== null)
  @IsString()
  @IsUUID(4, { each: true })
  artistId: string | null;
}
