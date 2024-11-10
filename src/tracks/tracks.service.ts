import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/tracks.entity';
import { tracks, favorites } from 'src/db/db';

@Injectable()
export class TracksService {
  getAll() {
    return tracks;
  }

  getOne(id: string) {
    const track = tracks.find((track) => track.id === id);
    if (!track) {
      throw new NotFoundException();
    }
    return track;
  }

  create(createTrackDto: CreateTrackDto) {
    const track = new Track(
      createTrackDto.name,
      createTrackDto.duration,
      createTrackDto.artistId,
      createTrackDto.albumId,
    );
    tracks.push(track);
    return track;
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    const track = tracks.find((track) => track.id === id);
    if (!track) {
      throw new NotFoundException();
    }

    return Object.assign(track, updateTrackDto);
  }

  remove(id: string) {
    const index = tracks.findIndex((track) => track.id === id);
    if (index == -1) {
      throw new NotFoundException();
    }
    tracks.splice(index, 1);

    const favIndex = favorites.tracks.findIndex((track) => track === id);
    favorites.tracks.splice(favIndex, 1);
    return tracks;
  }
}
