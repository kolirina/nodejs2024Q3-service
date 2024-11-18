import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const artists = await this.prisma.favouriteArtist.findMany({
      include: { artist: true },
    });
    const albums = await this.prisma.favouriteAlbum.findMany({
      include: { album: true },
    });
    const tracks = await this.prisma.favouriteTrack.findMany({
      include: { track: true },
    });

    return {
      artists: artists.map((fav) => fav.artist),
      albums: albums.map((fav) => fav.album),
      tracks: tracks.map((fav) => fav.track),
    };
  }

  async addArtist(id: string) {
    const artist = await this.prisma.artist.findUnique({ where: { id } });
    if (!artist) {
      throw new UnprocessableEntityException('Artist not found');
    }
    await this.prisma.favouriteArtist.create({
      data: { artistId: id },
    });
    return 'Artist added to favourites';
  }

  async addAlbum(id: string) {
    const album = await this.prisma.album.findUnique({ where: { id } });
    if (!album) {
      throw new UnprocessableEntityException('Album not found');
    }
    await this.prisma.favouriteAlbum.create({
      data: { albumId: id },
    });
    return 'Album added to favourites';
  }

  async addTrack(id: string) {
    const track = await this.prisma.track.findUnique({ where: { id } });
    if (!track) {
      throw new UnprocessableEntityException('Track not found');
    }
    await this.prisma.favouriteTrack.create({
      data: { trackId: id },
    });
    return 'Track added to favourites';
  }

  async removeArtist(id: string) {
    const favArtist = await this.prisma.favouriteArtist.findUnique({
      where: { artistId: id },
    });
    if (!favArtist) {
      throw new NotFoundException('Artist is not in favourites');
    }
    await this.prisma.favouriteArtist.delete({
      where: { artistId: id },
    });
    return 'Artist removed from favourites';
  }

  async removeAlbum(id: string) {
    const favAlbum = await this.prisma.favouriteAlbum.findUnique({
      where: { albumId: id },
    });
    if (!favAlbum) {
      throw new NotFoundException('Album is not in favorites');
    }
    await this.prisma.favouriteAlbum.delete({
      where: { albumId: id },
    });
    return 'Album removed from favourites';
  }

  async removeTrack(id: string) {
    const favTrack = await this.prisma.favouriteTrack.findUnique({
      where: { trackId: id },
    });
    if (!favTrack) {
      throw new NotFoundException('Track is not in favorites');
    }
    await this.prisma.favouriteTrack.delete({
      where: { trackId: id },
    });
    return 'Track removed from favourites';
  }
}
