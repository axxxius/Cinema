import { Loader } from '@components';
import { useRequestPosterQuery } from '@utils';

import { FilmList } from './filmList/filmList.tsx';

import cl from './poster.module.scss';

export const Poster = () => {
  const { data, isLoading } = useRequestPosterQuery();

  if (isLoading) return <Loader />;

  return (
    <div className={cl.poster_container}>
      <h1 className={cl.title}>Афиша</h1>
      <FilmList films={data?.data.films} />
    </div>
  );
};
