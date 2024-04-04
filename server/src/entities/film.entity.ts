import { ApiProperty } from '@nestjs/swagger';

import { FilmPerson } from './film-person.entity';
import { FilmUserRaiting } from './film-user-rating.entity';

export enum Rating {
  G = 'G',
  PG = 'PG',
  PG13 = 'PG13',
  R = 'R',
  NC17 = 'NC17'
}

export class Film {
  @ApiProperty({ example: '1', description: 'Идентификатор фильма' })
  id: string;

  @ApiProperty({ description: 'Название фильма' })
  name: string;

  @ApiProperty({ description: 'Оригинальное название' })
  originalName: string;

  @ApiProperty({ description: 'Описание фильма' })
  description: string;

  @ApiProperty({ description: 'Дата выхода' })
  releaseDate: string;

  @ApiProperty({ description: 'Актеры', type: [FilmPerson] })
  actors: FilmPerson[];

  @ApiProperty({ description: 'Режиссер', type: [FilmPerson] })
  directors: FilmPerson[];

  @ApiProperty({ description: 'Продолжительность', type: Number })
  runtime: number;

  @ApiProperty({ description: 'Возрастное ограничение', enum: Rating })
  ageRating: Rating;

  @ApiProperty({ description: 'Жанры', type: [String] })
  genres: string[];

  @ApiProperty({ description: 'Рейтинг пользователей', type: FilmUserRaiting })
  userRatings: FilmUserRaiting;

  @ApiProperty({ description: 'Изображение фильма' })
  img: string;
}
