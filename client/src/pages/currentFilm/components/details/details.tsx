import { StarsRating, Typography } from '@common';

import cl from './details.module.scss';

interface CurrentFilmDetailsProps {
  film: api.Film | undefined;
}

export const Details = ({ film }: CurrentFilmDetailsProps) => {
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
            <Typography tag='h1'>{film.name}</Typography>
            <p className={cl.original_name}>{film.originalName}</p>
            <StarsRating rating={film.userRatings.kinopoisk} />
            <p className={cl.rating}>kinopoisk: {film.userRatings.kinopoisk}</p>
            <Typography variant='sub-body' className={cl.description}>
              {film.description}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};
