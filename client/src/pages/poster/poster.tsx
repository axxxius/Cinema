import { Loader } from '@components';
import { useRequestTodayPosterQuery } from '@utils';

import cl from './poster.module.scss';
import { FilmList } from './components';

export const Poster = () => {
  const { data: films, isLoading } = useRequestTodayPosterQuery();

  if (isLoading) return <Loader />;

  return (
    <div className={cl.poster_container}>
      <h1 className={cl.title}>Афиша</h1>
      <FilmList films={films} />
    </div>
  );
};
