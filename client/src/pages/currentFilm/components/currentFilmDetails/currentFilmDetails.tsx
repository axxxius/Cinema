import { StarsRating } from '@components';

import cl from './currentFilmDetails.module.scss';

interface CurrentFilmDetailsProps {
  film: api.Film | undefined;
}

export const CurrentFilmDetails = ({ film }: CurrentFilmDetailsProps) => {
  return (
    <>
      {film && (
        <div className={cl.container}>
          <img
            className={cl.film_image}
            src={`${import.meta.env.VITE_API_URL}${film.img}`}
            alt='film'
          />
          <div className={cl.details_info_container}>
            <h1>{film.name}</h1>
            <p>{film.originalName}</p>
            <StarsRating rating={film.userRatings.kinopoisk} />
            <p>kinopoisk: {film.userRatings.kinopoisk}</p>
            <p className={cl.description}>{film.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
