import { FilmCard } from '../filmCard/filmCard.tsx';

import cl from './filmList.module.scss';

export interface FilmListProps {
  films?: api.Film[];
}

export const FilmList = ({ films }: FilmListProps) => (
  <div className={cl.list_container}>
    {films?.map((film) => (
      <FilmCard
        key={film.id}
        id={film.id}
        name={film.name}
        originalName={film.originalName}
        img={film.img}
        userRatings={film.userRatings}
      />
    ))}
  </div>
);
