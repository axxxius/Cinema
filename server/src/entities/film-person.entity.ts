import { ApiProperty } from '@nestjs/swagger';

export enum Profession {
  ACTOR = 'ACTOR',
  DIRECTOR = 'DIRECTOR'
}

export class FilmPerson {
  @ApiProperty({ example: '1', description: 'Идентификатор персоны' })
  id: string;

  @ApiProperty({ description: 'Список профессий', enum: Profession })
  professions: Profession[];

  @ApiProperty({ description: 'Полное имя персоны' })
  fullName: string;
}
