import { Loader, Typography } from '@common';
import { useRequestTodayPosterQuery } from '@utils';

import { FilmList } from './components';

import cl from './poster.module.scss';

export const Poster = () => {
  const { data: movie, isLoading } = useRequestTodayPosterQuery();
  const films = movie?.data.films;

  if (isLoading) return <Loader />;

  return (
    <div className={cl.poster_container}>
      <Typography tag='h1' variant='title' className={cl.title}>
        Афиша
      </Typography>
      <FilmList films={films} />
    </div>
  );
};
