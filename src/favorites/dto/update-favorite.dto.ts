import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteDto } from './create-favorite.dto';

export class UpdateFavDto extends PartialType(CreateFavoriteDto) {}
