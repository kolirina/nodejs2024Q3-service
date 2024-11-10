import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artists.entity';
import { artists, albums, tracks, favorites } from 'src/db/db';

@Injectable()
export class ArtistsService {
  getAll() {
    return artists;
  }

  getOne(id: string) {
    const artist = artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new NotFoundException();
    }
    return artist;
  }

  create(createArtistDto: CreateArtistDto) {
    const artist = new Artist(createArtistDto.name, createArtistDto.grammy);
    artists.push(artist);
    return artist;
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    const artist = artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new NotFoundException();
    }

    if (updateArtistDto.name) {
      artist.name = updateArtistDto.name;
    }
    if (updateArtistDto.grammy !== artist.grammy) {
      artist.grammy = updateArtistDto.grammy;
    }

    return artist;
  }

  remove(id: string) {
    const index = artists.findIndex((artist) => artist.id === id);
    if (index == -1) {
      throw new NotFoundException();
    }
    artists.splice(index, 1);

    const authorTracks = tracks.filter((track) => (track.artistId = id));
    authorTracks.forEach((track) => {
      track.artistId = null;
    });

    const authorAlbums = albums.filter((album) => (album.artistId = id));
    authorAlbums.forEach((album) => {
      album.artistId = null;
    });

    const favIndex = favorites.albums.findIndex((album) => album === id);
    favorites.albums.splice(favIndex, 1);

    return artists;
  }
}
