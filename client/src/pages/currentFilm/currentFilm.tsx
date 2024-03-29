import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import arrowLeft from '@assets/icons/arrowLeft.svg';
import { Loader } from '@components';
import { useRequestFilmByIdQuery, useRequestScheduleByFilmIdQuery } from '@utils';

import { CurrentFilmDetails, ScheduleCurrentFilm } from './components';

import cl from './currentFilm.module.scss';
import { useSchedule } from './components/schedule/hooks/useSchedule.ts';

export const CurrentFilm = () => {
  const { id } = useParams();

  const { data: film, isLoading } = useRequestFilmByIdQuery({ id });

  const { data } = useRequestScheduleByFilmIdQuery({ id });

  const { onClickDate, onClickTime, schedule } = useSchedule(data?.data?.schedules);

  if (isLoading) return <Loader />;

  return (
    <div className={cl.container}>
      <Link to='/' className={cl.navigate}>
        <img src={arrowLeft} alt='arrowLeft' />
        Назад
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
