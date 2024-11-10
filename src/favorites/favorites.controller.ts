import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { UUIDvalidate } from 'src/UUID.validator';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.favoritesService.getAll();
  }

  @Post('artist/:id')
  @HttpCode(HttpStatus.CREATED)
  addArtist(@Param('id', UUIDvalidate) id: string) {
    return this.favoritesService.addArtist(id);
  }

  @Post('album/:id')
  @HttpCode(HttpStatus.CREATED)
  addAlbum(@Param('id', UUIDvalidate) id: string) {
    return this.favoritesService.addAlbum(id);
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeArtist(@Param('id', UUIDvalidate) id: string) {
    return this.favoritesService.removeArtist(id);
  }

  @Post('track/:id')
  @HttpCode(HttpStatus.CREATED)
  addTrack(@Param('id', UUIDvalidate) id: string) {
    return this.favoritesService.addTrack(id);
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAlbum(@Param('id', UUIDvalidate) id: string) {
    return this.favoritesService.removeAlbum(id);
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeTrack(@Param('id', UUIDvalidate) id: string) {
    return this.favoritesService.removeTrack(id);
  }
}
