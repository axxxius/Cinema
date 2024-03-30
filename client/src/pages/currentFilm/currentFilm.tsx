import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import arrowLeft from '@assets/icons/arrowLeft.svg';
import { Loader, Typography } from '@common';
import { ROUTES, useRequestFilmByIdQuery, useRequestScheduleByFilmIdQuery } from '@utils';

import { CurrentFilmDetails, ScheduleCurrentFilm, useSchedule } from './components';

import cl from './currentFilm.module.scss';

export const CurrentFilm = () => {
  const { id } = useParams();

  const { data: film, isLoading } = useRequestFilmByIdQuery({ id });

  const { data } = useRequestScheduleByFilmIdQuery({ id });

  const { onClickDate, onClickTime, schedule } = useSchedule(data?.data?.schedules);

  if (isLoading) return <Loader />;

  return (
    <div className={cl.container}>
      <Link to={ROUTES.MAIN} className={cl.navigate}>
        <img src={arrowLeft} alt='arrowLeft' />
        <Typography variant='sub-body' tag='div'>
          Назад
        </Typography>
      </Link>

      <CurrentFilmDetails film={film?.data?.film} />
      <ScheduleCurrentFilm
        onClickDate={onClickDate}
        onClickTime={onClickTime}
        schedule={schedule}
      />
    </div>
  );
};
