import { ApiProperty } from '@nestjs/swagger';

export class FilmUserRaiting {
  @ApiProperty({ example: '10', description: 'Рейтинг кинопоиск' })
  kinopoisk: string;

  @ApiProperty({ example: '10', description: 'Рейтинг imdb' })
  imdb: string;
}
