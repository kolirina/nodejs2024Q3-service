import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { albums, tracks, favorites } from 'src/db/db';
import { Album } from './entities/albums.entity';

@Injectable()
export class AlbumsService {
  create(createAlbumDto: CreateAlbumDto) {
    const album = new Album(
      createAlbumDto.name,
      createAlbumDto.year,
      createAlbumDto.artistId,
    );
    albums.push(album);
    return album;
  }

  getAll() {
    return albums;
  }

  getOne(id: string) {
    const album = albums.find((album) => album.id === id);
    if (!album) {
      throw new NotFoundException();
    }
    return album;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = albums.find((album) => album.id === id);
    if (!album) {
      throw new NotFoundException();
    }
    return Object.assign(album, updateAlbumDto);
  }

  remove(id: string) {
    const index = albums.findIndex((album) => album.id === id);
    if (index == -1) {
      throw new NotFoundException();
    }
    albums.splice(index, 1);

    const albumTracks = tracks.filter((track) => (track.artistId = id));
    albumTracks.forEach((track) => {
      track.albumId = null;
    });

    const favIndex = favorites.albums.findIndex((album) => album === id);
    favorites.albums.splice(favIndex, 1);
    return albums;
  }
}
