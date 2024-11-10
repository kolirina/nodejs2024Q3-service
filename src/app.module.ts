import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AlbumModule } from './albums/albums.module';
import { TrackModule } from './tracks/tracks.module';
import { ArtistModule } from './artists/artists.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    UsersModule,
    AlbumModule,
    ArtistModule,
    TrackModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
