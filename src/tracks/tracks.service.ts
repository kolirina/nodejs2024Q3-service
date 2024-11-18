import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TracksService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const tracks = await this.prisma.track.findMany();
    return tracks;
  }

  async getOne(id: string) {
    const track = await this.prisma.track.findUnique({
      where: { id },
    });
    if (!track) {
      throw new NotFoundException(`Track with ID ${id} not found`);
    }
    return track;
  }

  async create(createTrackDto: CreateTrackDto) {
    const track = await this.prisma.track.create({
      data: {
        name: createTrackDto.name,
        duration: createTrackDto.duration,
        artistId: createTrackDto.artistId,
        albumId: createTrackDto.albumId,
      },
    });
    return track;
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    const track = await this.prisma.track.findUnique({
      where: { id },
    });

    if (!track) {
      throw new NotFoundException(`Track with ID ${id} not found`);
    }

    const updatedTrack = await this.prisma.track.update({
      where: { id },
      data: updateTrackDto,
    });

    return updatedTrack;
  }

  async remove(id: string) {
    const track = await this.prisma.track.findUnique({
      where: { id },
    });

    if (!track) {
      throw new NotFoundException(`Track with ID ${id} not found`);
    }

    await this.prisma.favouriteTrack.deleteMany({
      where: { trackId: id },
    });

    await this.prisma.track.delete({
      where: { id },
    });

    return { message: `Track with ID ${id} was successfully deleted` };
  }
}
