import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controllers';
import { AlbumsService } from './albums.service';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumModule {}
