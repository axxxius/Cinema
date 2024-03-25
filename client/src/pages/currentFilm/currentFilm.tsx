import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import arrowLeft from '@assets/icons/arrowLeft.svg';
import { Loader } from '@components';
import { useRequestFilmByIdQuery } from '@utils';

import { CurrentFilmDetails, ScheduleCurrentFilm } from './components';

import cl from './currentFilm.module.scss';

export const CurrentFilm = () => {
  const { id } = useParams();

  const { data: film, isLoading } = useRequestFilmByIdQuery({ id });

  if (isLoading) return <Loader />;

  return (
    <div className={cl.container}>
      <Link to='/' className={cl.navigate}>
        <img src={arrowLeft} alt='arrowLeft' />
        Назад
      </Link>

      <CurrentFilmDetails film={film?.data?.film} />
      <ScheduleCurrentFilm id={id!} />
    </div>
  );
};
