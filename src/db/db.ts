import { User } from 'src/users/entities/user.entity';
import { Artist } from 'src/artists/entities/artists.entity';
import { Album } from 'src/albums/entities/albums.entity';
import { Track } from 'src/tracks/entities/tracks.entity';
import { Favorite } from 'src/favorites/entities/favorites.entity';

export const users: User[] = [];
export const artists: Artist[] = [];
export const albums: Album[] = [];
export const tracks: Track[] = [];
export const favorites: Favorite = new Favorite();
