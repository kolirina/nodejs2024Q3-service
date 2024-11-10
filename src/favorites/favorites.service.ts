import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { albums, artists, favorites, tracks } from 'src/db/db';

@Injectable()
export class FavoritesService {
  getAll() {
    return {
      artists: favorites.artists
        .map((id) => artists.find((artist) => artist.id === id))
        .filter((n) => n),
      albums: favorites.albums
        .map((id) => albums.find((album) => album.id === id))
        .filter((n) => n),
      tracks: favorites.tracks
        .map((id) => tracks.find((track) => track.id === id))
        .filter((n) => n),
    };
  }

  addArtist(id: string) {
    const artist = artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new UnprocessableEntityException('Artist not found');
    }
    if (!favorites.artists.includes(artist.id))
      favorites.artists.push(artist.id);
    return 'Artist added to favorites';
  }

  addAlbum(id: string) {
    const album = albums.find((album) => album.id === id);
    if (!album) {
      throw new UnprocessableEntityException('Album not found');
    }
    if (!favorites.albums.includes(album.id)) favorites.albums.push(album.id);
    return 'Album added to favorites';
  }

  addTrack(id: string) {
    const track = tracks.find((track) => track.id === id);
    if (!track) {
      throw new UnprocessableEntityException('Track not found');
    }
    if (!favorites.tracks.includes(track.id)) favorites.tracks.push(track.id);
    return 'Track added to favorites';
  }

  removeArtist(id: string) {
    const index = favorites.artists.findIndex((artist) => artist === id);
    if (index == -1) {
      throw new NotFoundException('Artist is not in favorites');
    }
    favorites.artists.splice(index, 1);
    return 'Artist removed from favorites';
  }

  removeAlbum(id: string) {
    const index = favorites.albums.findIndex((album) => album === id);
    if (index == -1) {
      throw new NotFoundException('Album is not in favorites');
    }
    favorites.albums.splice(index, 1);
    return 'Album removed from favorites';
  }

  removeTrack(id: string) {
    const index = favorites.tracks.findIndex((track) => track === id);
    if (index == -1) {
      throw new NotFoundException('Track is not in favorites');
    }
    favorites.tracks.splice(index, 1);
    return 'Track removed from favorites';
  }
}
