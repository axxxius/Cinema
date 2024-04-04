import { ApiProperty } from '@nestjs/swagger';

export enum FilmHallCellStatus {
  DEFAULT = 'DEFAULT',
  PAYED = 'PAYED'
}

export enum FilmHallCellType {
  ECONOM = 'ECONOM',
  COMFORT = 'COMFORT',
  BLOCKED = 'BLOCKED'
}

export class FilmHallCell {
  @ApiProperty({ description: 'Тип места в зале', enum: FilmHallCellType })
  type: FilmHallCellType;

  @ApiProperty({ example: 100, description: 'Цена места в зале' })
  price: number;
}
